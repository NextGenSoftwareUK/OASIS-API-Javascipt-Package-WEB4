'use strict';

/**
 * Generates docs/modules/<Name>.md (one page per controller module) plus
 * docs/README.md (the index) by parsing the generated src/modules/*.js files
 * directly - no separate data source to fall out of sync with the code.
 *
 * Run with: node scripts/generate-docs.js
 */

const fs = require('fs');
const path = require('path');

const modulesDir = path.join(__dirname, '..', 'src', 'modules');
const docsDir = path.join(__dirname, '..', 'docs');
const docsModulesDir = path.join(docsDir, 'modules');

fs.mkdirSync(docsModulesDir, { recursive: true });

function toCamel(name) {
  return name.charAt(0).toLowerCase() + name.slice(1);
}

function routeTokens(route) {
  const matches = [...route.matchAll(/\{(\w+)(?::\w+)?\}/g)];
  return matches.map((m) => m[1]);
}

function exampleArgsFor(tokens, verb) {
  const obj = {};
  for (const t of tokens) obj[t] = `'<${t}>'`;
  if (verb !== 'GET' && verb !== 'DELETE') {
    obj['/* ...other fields per the request body */'] = '';
  }
  const entries = Object.entries(obj)
    .map(([k, v]) => (v === '' ? `    ${k}` : `    ${k}: ${v}`))
    .join(',\n');
  return entries ? `{\n${entries}\n  }` : '{}';
}

function parseModuleFile(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  const classMatch = src.match(/class (\w+) \{/);
  const routePrefixMatch = src.match(/Generated wrapper for (\S+)/);
  const sourceFileMatch = src.match(/source: ONODE WebAPI (\S+)\)/);
  const opPattern = /this\.(\w+) = makeOperation\(http, "([^"]*)", "([A-Z]+)", "([^"]*)"\);/g;

  const ops = [];
  let m;
  while ((m = opPattern.exec(src))) {
    const [, jsName, prefix, verb, route] = m;
    ops.push({ jsName, prefix, verb, route });
  }

  return {
    className: classMatch ? classMatch[1] : null,
    routePrefix: routePrefixMatch ? routePrefixMatch[1] : null,
    sourceFile: sourceFileMatch ? sourceFileMatch[1] : null,
    ops: ops.sort((a, b) => a.jsName.localeCompare(b.jsName))
  };
}

const files = fs
  .readdirSync(modulesDir)
  .filter((f) => f.endsWith('.js') && f !== 'index.js' && f !== 'Auth.js')
  .sort();

const moduleSummaries = [];

for (const file of files) {
  const moduleName = file.replace(/\.js$/, '');
  const clientProp = toCamel(moduleName);
  const { routePrefix, sourceFile, ops } = parseModuleFile(path.join(modulesDir, file));
  if (!ops.length) continue;

  moduleSummaries.push({ moduleName, clientProp, routePrefix, opCount: ops.length });

  const rows = ops
    .map((op) => {
      const tokens = routeTokens(op.route);
      const fullRoute = op.route ? `${op.prefix}/${op.route}` : op.prefix;
      return `| \`${op.jsName}\` | ${op.verb} | \`${fullRoute}\` | ${tokens.length ? tokens.map((t) => `\`${t}\``).join(', ') : '–'} |`;
    })
    .join('\n');

  const exampleOp = ops[0];
  const exampleTokens = routeTokens(exampleOp.route);
  const exampleArgs = exampleArgsFor(exampleTokens, exampleOp.verb);

  const content = `# ${moduleName} — \`oasis.${clientProp}\`

Source controller: [\`${sourceFile}\`](https://github.com/NextGenSoftwareUK/OASIS/blob/main/ONODE/NextGenSoftware.OASIS.API.ONODE.WebAPI/Controllers/${sourceFile})
Route prefix: \`${routePrefix}\`
${ops.length} operation(s).

All methods are generated 1:1 from the controller's real \`[Http*]\` routes (see
[Conventions](../README.md#calling-any-endpoint)). They take a single args
object: any key matching a \`{token}\` in the route is substituted into the
URL; everything else becomes the query string (GET/DELETE) or JSON body
(POST/PUT).

## Methods

| Method | HTTP | Route | Route params |
| --- | --- | --- | --- |
${rows}

## Example

\`\`\`js
const oasis = new OASISClient({ baseUrl: '...' });
oasis.setToken(jwtToken); // or: await oasis.auth.login({ username, password })

const { isError, message, result } = await oasis.${clientProp}.${exampleOp.jsName}(${exampleArgs});
if (isError) throw new Error(message);
console.log(result);
\`\`\`
`;

  fs.writeFileSync(path.join(docsModulesDir, `${moduleName}.md`), content);
}

const indexRows = moduleSummaries
  .map((m) => `| [\`oasis.${m.clientProp}\`](modules/${m.moduleName}.md) | \`${m.routePrefix}\` | ${m.opCount} |`)
  .join('\n');

const totalOps = moduleSummaries.reduce((n, m) => n + m.opCount, 0);

const indexContent = `# WEB4 OASIS API — JavaScript SDK Reference

Generated from \`src/modules/*.js\` by \`scripts/generate-docs.js\`. Regenerate
after running \`node scripts/generate-modules.js\` against an updated
\`endpoints.json\` so the docs never drift from the actual code.

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
