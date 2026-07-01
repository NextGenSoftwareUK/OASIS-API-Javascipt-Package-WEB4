'use strict';

/**
 * Scans the ONODE WebAPI controllers in the sibling OASIS checkout and emits
 * endpoints.json: { "<Name>Controller.cs": { route_prefix, ops: { OpName: {
 *   verb, route, requestType, responseType, routeParams, summary
 * } } } }
 *
 * Run with: node scripts/extract-endpoints.js [path-to-Controllers-dir]
 */

const fs = require('fs');
const path = require('path');

const controllersDir =
  process.argv[2] ||
  path.join(
    __dirname,
    '..',
    '..',
    'OASIS',
    'ONODE',
    'NextGenSoftware.OASIS.API.ONODE.WebAPI',
    'Controllers'
  );
const outFile = process.argv[3] || path.join(__dirname, '..', 'endpoints.json');

const SIMPLE_TYPES = new Set([
  'string', 'bool', 'int', 'long', 'double', 'float', 'decimal', 'Guid',
  'DateTime', 'short', 'byte', 'object'
]);

function splitTopLevel(str, sep) {
  const out = [];
  let depth = 0;
  let cur = '';
  for (const ch of str) {
    if (ch === '<' || ch === '(') depth++;
    if (ch === '>' || ch === ')') depth--;
    if (ch === sep && depth === 0) {
      out.push(cur);
      cur = '';
    } else {
      cur += ch;
    }
  }
  if (cur.trim() !== '') out.push(cur);
  return out;
}

function parseParams(paramsStr) {
  if (!paramsStr.trim()) return [];
  return splitTopLevel(paramsStr, ',').map((p) => {
    const rawTrimmed = p.trim();
    const attrMatch = rawTrimmed.match(/^\[(From\w+)\]\s*/);
    const attr = attrMatch ? attrMatch[1] : null;
    const trimmed = rawTrimmed.replace(/^\[\w+\]\s*/, '');
    const hasDefault = trimmed.includes('=');
    const withoutDefault = hasDefault ? trimmed.split('=')[0].trim() : trimmed;
    const parts = withoutDefault.split(/\s+/);
    const name = parts.pop();
    let type = parts.filter((t) => !['readonly', 'params'].includes(t)).join(' ');
    type = type.replace(/^(?:\w+\.)+/, ''); // strip leading namespace qualifiers
    return { type, name, hasDefault, attr };
  });
}

function stripNamespace(type) {
  return type.replace(/(?:^|<)((?:\w+\.)+)(\w)/g, (full, ns, firstChar) => full.slice(0, full.length - ns.length - 1) + firstChar);
}

function extractReturnType(taskGeneric) {
  // taskGeneric is e.g. "OASISResult<IWeb4NFT>" or "OASISHttpResponseMessage<IAvatar>"
  const m = taskGeneric.match(/^(\w+)<([\s\S]+)>$/);
  if (!m) return { wrapper: null, inner: stripNamespace(taskGeneric.trim()) };
  return { wrapper: m[1], inner: stripNamespace(m[2].trim()) };
}

function parseController(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  const classMatch = src.match(/public class (\w+)Controller\s*:/);
  if (!classMatch) return null;
  const controllerName = classMatch[1];
  const routeAttrMatch = src
    .slice(0, classMatch.index)
    .match(/\[Route\("([^"]*)"\)\]\s*(?:\[\w+\]\s*)*$/);
  const literalRoute = routeAttrMatch ? routeAttrMatch[1] : 'api/[controller]';
  // ASP.NET's [controller] token substitutes the PascalCase class name; the
  // existing SDKs document that as camelCase (single-word names like "Nft"
  // collapse to the same thing as lowercase, so this matches both styles).
  const camelControllerName = controllerName.charAt(0).toLowerCase() + controllerName.slice(1);
  const routePrefix = literalRoute.includes('[controller]')
    ? literalRoute.replace('[controller]', camelControllerName)
    : literalRoute;

  const lines = src.split('\n');
  let verb = null;
  let route = null;
  let summaryLines = [];
  let inSummary = false;
  let pendingProduces200 = null;
  const ops = {};

  const methodSig = /public\s+(?:virtual\s+|override\s+)?(?:async\s+Task<([\s\S]+?)>|(\w+<[\s\S]+?>)|(IActionResult|ActionResult))\s+(\w+)\s*\(([^)]*)\)\s*$/;
  const methodStart = /public\s+(?:virtual\s+|override\s+)?(?:async\s+Task<|\w+(?:Result|ResponseMessage)<|(?:IActionResult|ActionResult)\s)/;
  const producesRegex = /\[ProducesResponseType\(typeof\(([\s\S]+?)\),\s*StatusCodes\.Status200OK\)\]/;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (/^\s*\/\/[^/]/.test(line) || /^\s*\/\/$/.test(line)) continue; // skip commented-out code

    if (/<summary>/.test(line)) {
      if (/<\/summary>/.test(line)) {
        const t = line.replace(/^.*<summary>/, '').replace(/<\/summary>.*$/, '').replace(/^\s*\/\/\/\s?/, '').trim();
        if (t) summaryLines = [t];
        continue;
      }
      inSummary = true;
      summaryLines = [];
      continue;
    }
    if (/<\/summary>/.test(line)) {
      inSummary = false;
      continue;
    }
    if (inSummary) {
      const t = line.replace(/^\s*\/\/\/\s?/, '').trim();
      if (t) summaryLines.push(t);
      continue;
    }

    const verbMatch = line.match(/\[Http(Get|Post|Put|Delete|Patch)(?:\("([^"]*)"\))?\]/);
    if (verbMatch) {
      verb = verbMatch[1].toUpperCase();
      route = verbMatch[2] !== undefined ? verbMatch[2] : null;
      continue;
    }
    const routeMatch = line.match(/\[Route\("([^"]*)"\)\]/);
    if (routeMatch && verb && route === null) {
      route = routeMatch[1];
      continue;
    }
    const producesMatch = line.match(producesRegex);
    if (producesMatch) {
      pendingProduces200 = producesMatch[1].trim();
      continue;
    }

    // Method signature may span multiple lines; join a small window.
    if (methodStart.test(line) && !line.includes(')')) {
      let joined = line;
      let j = i + 1;
      while (!joined.includes(')') && j < lines.length && j < i + 5) {
        joined += ' ' + lines[j];
        j++;
      }
      const sigMatch = joined.match(methodSig);
      if (sigMatch && verb) {
        recordOp(sigMatch);
        i = j - 1;
        continue;
      }
    } else {
      const sigMatch = line.match(methodSig);
      if (sigMatch && verb) {
        recordOp(sigMatch);
      }
    }
  }

  function recordOp(sigMatch) {
    const [, taskInner, directGeneric, plainActionResult, methodName, paramsStr] = sigMatch;
    let taskGeneric;
    if (taskInner !== undefined && !/^(?:IActionResult|ActionResult)$/.test(taskInner.trim())) taskGeneric = taskInner;
    else if (directGeneric !== undefined) taskGeneric = directGeneric;
    else if (pendingProduces200) taskGeneric = pendingProduces200;
    else taskGeneric = 'object';
    const params = parseParams(paramsStr);
    route = route || '';
    const routeTokens = [...route.matchAll(/\{(\w+)(?::\w+)?\}/g)].map((m) => m[1]);

    const routeParams = [];
    let requestType = null;
    let bodyParam = null;
    const queryParams = [];
    const forcedQueryNames = [];
    const isComplex = (type) => !SIMPLE_TYPES.has(type) && !/^(ProviderType|HolonType|\w+Type)$/.test(type);

    for (const p of params) {
      if (routeTokens.some((t) => t.toLowerCase() === p.name.toLowerCase())) {
        routeParams.push(p);
      } else if (p.attr === 'FromQuery') {
        queryParams.push(p);
        forcedQueryNames.push(p.name);
      } else if (p.attr === 'FromBody') {
        if (isComplex(p.type)) {
          requestType = p.type;
        } else if (!requestType && !bodyParam) {
          // A single [FromBody] primitive means the entire JSON body is that
          // raw value, not an object wrapping it under the param's name.
          bodyParam = p.name;
          queryParams.push(p);
        } else {
          queryParams.push(p);
        }
      } else if (isComplex(p.type) && !requestType) {
        requestType = p.type;
      } else {
        queryParams.push(p);
      }
    }

    // Keep the overload with fewest params per method name - later overloads
    // that add providerType/setGlobally just delegate to this one. On a tie,
    // keep the first one seen (some controllers reuse a method name for
    // genuinely distinct operations with the same param count, e.g.
    // AvatarController.Authenticate(AuthenticateRequest) vs Authenticate(string JWTToken) -
    // the first one in source order is the primary/intended operation).
    const shouldSkip = ops[methodName] && params.length >= ops[methodName]._paramCount;

    if (!shouldSkip) {
      ops[methodName] = {
        verb,
        route,
        routeParams: routeParams.map((p) => ({ name: p.name, type: p.type })),
        queryParams: queryParams.map((p) => ({ name: p.name, type: p.type, optional: p.hasDefault })),
        requestType,
        responseType: extractReturnType(taskGeneric.trim()),
        summary: summaryLines.join(' ') || null,
        // Used by generate-modules.js to build the runtime call signature -
        // see routeHelper.js's makeOperation() jsdoc for the contract.
        query: forcedQueryNames.length ? forcedQueryNames : undefined,
        bodyParam: bodyParam || undefined,
        _paramCount: params.length
      };
    }

    verb = null;
    route = null;
    summaryLines = [];
    pendingProduces200 = null;
  }

  return { controllerName, routePrefix, ops };
}

const files = fs
  .readdirSync(controllersDir)
  .filter((f) => f.endsWith('Controller.cs'))
  .sort();

const result = {};
let totalOps = 0;

for (const file of files) {
  const parsed = parseController(path.join(controllersDir, file));
  if (!parsed || !Object.keys(parsed.ops).length) continue;
  result[file] = { route_prefix: parsed.routePrefix, ops: parsed.ops };
  totalOps += Object.keys(parsed.ops).length;
}

fs.writeFileSync(
  outFile,
  JSON.stringify(result, (k, v) => (k === '_paramCount' ? undefined : v), 2)
);

console.log(`Extracted ${Object.keys(result).length} controllers, ${totalOps} operations -> ${outFile}`);
