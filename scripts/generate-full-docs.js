'use strict';

/**
 * Generates full per-endpoint docs/modules/<Name>.md (real request/response
 * fields + example JSON, pulled from endpoints.json + the OASIS2 C# source)
 * plus the docs/README.md index.
 *
 * Pipeline: node scripts/extract-endpoints.js && node scripts/generate-modules.js
 *           && node scripts/generate-full-docs.js
 */

const fs = require('fs');
const path = require('path');
const { resolveType, exampleValueFor, isPrimitive, exampleForPrimitive } = require('./resolve-type');

const endpoints = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'endpoints.json'), 'utf8'));
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

function exampleCallArgs(op) {
  const obj = {};
  for (const rp of op.routeParams) obj[rp.name] = `'<${rp.name}>'`;
  for (const qp of op.queryParams) {
    obj[qp.name] = isPrimitive(qp.type) ? exampleForPrimitive(qp.type).replace(/"/g, "'") : `'<${qp.name}>'`;
  }
  if (op.requestType) {
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

    let requestSection;
    if (op.requestType) {
      const resolved = resolveType(op.requestType);
      if (resolved.kind === 'object') {
        requestSection = `Body type: \`${op.requestType}\`\n\n${fieldRows(resolved.properties)}`;
      } else if (resolved.kind === 'unresolved') {
        unresolvedTypes.add(op.requestType);
        requestSection = `Body type: \`${op.requestType}\` _(type definition not found - field list unavailable)_`;
      } else {
        requestSection = `Body: \`${op.requestType}\``;
      }
    } else if (op.queryParams.length) {
      requestSection =
        (op.verb === 'GET' || op.verb === 'DELETE' ? 'Query parameters' : 'Body fields') +
        ':\n\n' +
        fieldRows(op.queryParams.map((p) => ({ name: p.name, type: p.type + (p.optional ? ' (optional)' : '') })));
    } else {
      requestSection = 'No request body.';
    }

    const routeParamsSection = op.routeParams.length
      ? `Route parameters:\n\n${fieldRows(op.routeParams)}\n\n`
      : '';

    let respInner = op.responseType.inner;
    const innerWrapMatch = respInner.match(/^(OASISResult|OASISHttpResponseMessage)<([\s\S]+)>$/);
    if (innerWrapMatch) respInner = innerWrapMatch[2];
    const respResolved = resolveType(respInner);
    let responseSection;
    if (respResolved.kind === 'object') {
      responseSection = `\`result\` type: \`${respInner}\`${respResolved.isCollection ? ' (array)' : ''}\n\n${fieldRows(respResolved.properties)}`;
    } else if (respResolved.kind === 'unresolved') {
      unresolvedTypes.add(respInner);
      responseSection = `\`result\` type: \`${respInner}\` _(type definition not found - field list unavailable)_`;
    } else {
      responseSection = `\`result\` type: \`${respInner}\``;
    }

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
const { isError, message, result } = await oasis.${clientProp}.${jsName}(${exampleCallArgs(op)});
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

  const content = `# ${moduleName} — \`oasis.${clientProp}\`

Source controller: [\`${filename}\`](https://github.com/NextGenSoftwareUK/OASIS2/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/${filename})
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
  .map((m) => `| [\`oasis.${m.clientProp}\`](modules/${m.moduleName}.md) | \`${m.routePrefix}\` | ${m.opCount} |`)
  .join('\n');

const indexContent = `# WEB4 OASIS API — JavaScript SDK Reference

Generated from \`endpoints.json\` (extracted from the ONODE WebAPI controllers) by
\`scripts/generate-full-docs.js\`. Regenerate the full pipeline after the API
changes:

\`\`\`
node scripts/extract-endpoints.js
node scripts/generate-modules.js
node scripts/generate-full-docs.js
\`\`\`

- [Getting Started](./getting-started.md)
- [Auth & Sessions](./auth.md)
- [Module Reference](#module-reference) (${moduleSummaries.length} modules, ${totalOps} operations)

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
