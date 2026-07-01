'use strict';

/**
 * Generates full per-endpoint docs/modules/<Name>.md (real request/response
 * fields + example JSON, pulled from endpoints.json + the OASIS C# source)
 * plus the docs/README.md index.
 *
 * Pipeline: node scripts/extract-endpoints.js && node scripts/generate-modules.js
 *           && node scripts/generate-full-docs.js
 */

const fs = require('fs');
const path = require('path');
const { resolveType, exampleValueFor, isPrimitive, isNoise, exampleForPrimitive } = require('./resolve-type');

// Usage: node generate-full-docs.js [endpointsJsonPath] [clientVar] [githubControllerBasePath] [title]
const endpointsPath = process.argv[2] || path.join(__dirname, '..', 'endpoints.json');
const clientVar = process.argv[3] || 'oasis';
const githubControllerBasePath =
  process.argv[4] || 'ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers';
const title = process.argv[5] || 'WEB4 OASIS API';

const endpoints = JSON.parse(fs.readFileSync(endpointsPath, 'utf8'));
const docsDir = path.join(__dirname, '..', 'docs');
const docsModulesDir = path.join(docsDir, 'modules');
fs.mkdirSync(docsModulesDir, { recursive: true });

function toCamel(name) {
  return name.charAt(0).toLowerCase() + name.slice(1);
}

function controllerToModuleName(filename) {
  return filename.replace(/Controller\.cs$/, '');
}

function fieldRows(props) {
  if (!props.length) return '_No fields._';
  return (
    '| Field | Type |\n| --- | --- |\n' +
    props.map((p) => `| \`${p.name}\` | \`${p.type}\` |`).join('\n')
  );
}

// Describes a resolved type for a doc section (request body or response
// result), handling every resolveType() kind uniformly.
function describeType(typeName, unresolvedTypes) {
  const resolved = resolveType(typeName);
  if (resolved.kind === 'object') {
    return `type: \`${resolved.typeName}\`${resolved.isCollection ? ' (array)' : ''}\n\n${fieldRows(resolved.properties)}`;
  }
  if (resolved.kind === 'dictionary') {
    return `type: \`Dictionary<${resolved.keyType}, ${resolved.valueType}>\` - a key/value map keyed by \`${resolved.keyType}\`, each value a \`${resolved.valueType}\`.`;
  }
  if (resolved.kind === 'unresolved') {
    unresolvedTypes.add(resolved.typeName);
    return `type: \`${resolved.typeName}\`${resolved.isCollection ? ' (array)' : ''} _(type definition not found in the OASIS source - field list unavailable)_`;
  }
  if (resolved.kind === 'noise') {
    return `type: \`${resolved.typeName}\` (not part of the request/response payload).`;
  }
  return `type: \`${resolved.typeName}\`${resolved.isCollection ? ' (array)' : ''}`;
}

function exampleCallArgs(op) {
  const obj = {};
  for (const rp of op.routeParams) {
    if (isNoise(rp.type)) continue;
    obj[rp.name] = `'<${rp.name}>'`;
  }
  for (const qp of op.queryParams) {
    if (isNoise(qp.type)) continue;
    obj[qp.name] = isPrimitive(qp.type) ? exampleForPrimitive(qp.type).replace(/"/g, "'") : `'<${qp.name}>'`;
  }
  if (op.requestType && !isNoise(op.requestType)) {
    const resolved = resolveType(op.requestType);
    if (resolved && resolved.kind === 'object') {
      for (const p of resolved.properties) {
        obj[p.name.charAt(0).toLowerCase() + p.name.slice(1)] = exampleValueFor(p.type).replace(/\n/g, '');
      }
    } else {
      obj['/* ...request body fields */'] = '';
    }
  }
  const entries = Object.entries(obj)
    .map(([k, v]) => (v === '' ? `    ${k}` : `    ${k}: ${v}`))
    .join(',\n');
  return entries ? `{\n${entries}\n  }` : '{}';
}

const unresolvedTypes = new Set();
const moduleSummaries = [];
let totalOps = 0;

for (const [filename, info] of Object.entries(endpoints)) {
  const moduleName = controllerToModuleName(filename);
  const clientProp = toCamel(moduleName);
  const opNames = Object.keys(info.ops).sort();
  if (!opNames.length) continue;

  moduleSummaries.push({ moduleName, clientProp, routePrefix: info.route_prefix, opCount: opNames.length });
  totalOps += opNames.length;

  const sections = opNames.map((opName) => {
    const op = info.ops[opName];
    const jsName = toCamel(opName);
    const fullRoute = op.route ? `${info.route_prefix}/${op.route}` : info.route_prefix;

    const queryParams = op.queryParams.filter((p) => !isNoise(p.type));

    let requestSection;
    if (op.requestType && !isNoise(op.requestType)) {
      requestSection = `Body ${describeType(op.requestType, unresolvedTypes)}`;
    } else if (queryParams.length) {
      requestSection =
        (op.verb === 'GET' || op.verb === 'DELETE' ? 'Query parameters' : 'Body fields') +
        ':\n\n' +
        fieldRows(queryParams.map((p) => ({ name: p.name, type: p.type + (p.optional ? ' (optional)' : '') })));
    } else {
      requestSection = 'No request body.';
    }

    const routeParamsSection = op.routeParams.length
      ? `Route parameters:\n\n${fieldRows(op.routeParams)}\n\n`
      : '';

    let respInner = op.responseType.inner;
    const innerWrapMatch = respInner.match(/^(OASISResult|OASISHttpResponseMessage)<([\s\S]+)>$/);
    if (innerWrapMatch) respInner = innerWrapMatch[2];
    const responseSection = `\`result\` ${describeType(respInner, unresolvedTypes)}`;

    const exampleResult = exampleValueFor(respInner);

    return `### \`${jsName}\`

${op.summary ? op.summary + '\n\n' : ''}**${op.verb}** \`${fullRoute}\`

${routeParamsSection}**Request**

${requestSection}

**Response**

Standard \`OASISResult\` envelope (see top of this page) with:

${responseSection}

**Example**

\`\`\`js
const { isError, message, result } = await ${clientVar}.${clientProp}.${jsName}(${exampleCallArgs(op)});
if (isError) throw new Error(message);
console.log(result);
\`\`\`

Example response:

\`\`\`json
{
  "isError": false,
  "message": "",
  "result": ${exampleResult}
}
\`\`\`
`;
  });

  const content = `# ${moduleName} — \`${clientVar}.${clientProp}\`

Source controller: [\`${filename}\`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/${githubControllerBasePath}/${filename})
Route prefix: \`${info.route_prefix}\`
${opNames.length} operation(s).

Every method takes a single args object: any key matching a \`{token}\` in the route is substituted into the URL; everything else becomes the query string (GET/DELETE) or JSON body (POST/PUT). Every call resolves to the standard OASIS envelope:

\`\`\`ts
{
  isError: boolean;
  isWarning: boolean;
  message: string;
  errorCode?: string;
  result: T; // see each endpoint's Response section below
}
\`\`\`

## Operations

${sections.join('\n---\n\n')}
`;

  fs.writeFileSync(path.join(docsModulesDir, `${moduleName}.md`), content);
}

const indexRows = moduleSummaries
  .map((m) => `| [\`${clientVar}.${m.clientProp}\`](modules/${m.moduleName}.md) | \`${m.routePrefix}\` | ${m.opCount} |`)
  .join('\n');

const indexContent = `# ${title} — JavaScript SDK Reference

Generated from \`endpoints.json\` (extracted from the WebAPI controllers) by
\`scripts/generate-full-docs.js\`. Regenerate the full pipeline after the API
changes:

\`\`\`
node scripts/extract-endpoints.js
node scripts/generate-modules.js
node scripts/generate-full-docs.js
\`\`\`

${fs.existsSync(path.join(docsDir, 'getting-started.md')) ? '- [Getting Started](./getting-started.md)\n' : ''}${fs.existsSync(path.join(docsDir, 'auth.md')) ? '- [Auth & Sessions](./auth.md)\n' : ''}- [Module Reference](#module-reference) (${moduleSummaries.length} modules, ${totalOps} operations)

## Module Reference

| Client property | Route prefix | Operations |
| --- | --- | --- |
${indexRows}
`;

fs.writeFileSync(path.join(docsDir, 'README.md'), indexContent);

console.log(`Generated docs for ${moduleSummaries.length} modules (${totalOps} operations) -> docs/`);
if (unresolvedTypes.size) {
  console.log(`Unresolved types (${unresolvedTypes.size}):`, [...unresolvedTypes].sort().join(', '));
}
