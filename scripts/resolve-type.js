'use strict';

const fs = require('fs');
const path = require('path');

const OASIS2_ROOT = path.join(__dirname, '..', '..', 'OASIS2');
const skipDirs = new Set(['bin', 'obj', 'node_modules', '.git', '.claude', '.vs']);

let typeIndex = null; // Map<lowercased typeName, { filePath, body }>

function findMatchingBrace(src, openIndex) {
  let depth = 0;
  for (let i = openIndex; i < src.length; i++) {
    if (src[i] === '{') depth++;
    else if (src[i] === '}') {
      depth--;
      if (depth === 0) return i;
    }
  }
  return src.length - 1;
}

// Scans every .cs file's contents (not just filenames) for class/interface/
// record/struct/enum declarations - many DTOs are nested inside manager or
// controller files rather than living in their own file.
function buildTypeIndex() {
  if (typeIndex) return typeIndex;
  typeIndex = new Map();

  const declRegex = /\b(?:public|internal|private|protected)?\s*(?:static\s+|sealed\s+|abstract\s+|partial\s+)*(?:class|interface|record|struct|enum)\s+(\w+)/g;

  function walk(dir) {
    let entries;
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const e of entries) {
      if (skipDirs.has(e.name)) continue;
      const full = path.join(dir, e.name);
      if (e.isDirectory()) {
        walk(full);
      } else if (e.name.endsWith('.cs')) {
        let src;
        try {
          src = fs.readFileSync(full, 'utf8');
        } catch {
          continue;
        }
        let m;
        declRegex.lastIndex = 0;
        while ((m = declRegex.exec(src))) {
          const name = m[1];
          const key = name.toLowerCase();
          if (typeIndex.has(key)) continue; // first declaration found wins
          const braceStart = src.indexOf('{', declRegex.lastIndex - 1);
          if (braceStart === -1) continue;
          const braceEnd = findMatchingBrace(src, braceStart);
          typeIndex.set(key, { filePath: full, body: src.slice(braceStart, braceEnd + 1), exactName: name });
        }
      }
    }
  }

  walk(OASIS2_ROOT);
  return typeIndex;
}

function stripGenerics(typeName) {
  // "IEnumerable<IWeb4NFT>" -> "IWeb4NFT"; "List<string>" -> "string"
  const m = typeName.match(/^(?:IEnumerable|List|ICollection|IList)<([\s\S]+)>$/);
  return m ? m[1].trim() : typeName.trim();
}

function isCollection(typeName) {
  return /^(IEnumerable|List|ICollection|IList)</.test(typeName.trim());
}

function parseDictionary(typeName) {
  const m = typeName.match(/^Dictionary<([\s\S]+)>$/);
  if (!m) return null;
  const parts = splitTopLevelComma(m[1]);
  if (parts.length !== 2) return null;
  return { keyType: parts[0].trim(), valueType: parts[1].trim() };
}

function splitTopLevelComma(str) {
  const out = [];
  let depth = 0;
  let cur = '';
  for (const ch of str) {
    if (ch === '<') depth++;
    if (ch === '>') depth--;
    if (ch === ',' && depth === 0) {
      out.push(cur);
      cur = '';
    } else {
      cur += ch;
    }
  }
  if (cur.trim() !== '') out.push(cur);
  return out;
}

const PRIMITIVE_EXAMPLES = {
  string: '"example string"',
  bool: 'true',
  int: '1',
  long: '1',
  double: '1.0',
  float: '1.0',
  decimal: '1.0',
  Guid: '"3fa85f64-5717-4562-b3fc-2c963f66afa6"',
  DateTime: '"2026-01-01T00:00:00Z"',
  byte: '1',
  'byte[]': '"<base64-bytes>"',
  Uri: '"https://example.com/asset.png"',
  object: '{}'
};

// Types that show up in C# signatures but aren't meaningful in the JS/HTTP
// surface - ASP.NET never binds these from the request, and they don't carry
// documentable response fields either.
const NOISE_TYPES = new Set(['CancellationToken', 'IActionResult', 'ActionResult']);

function isPrimitive(typeName) {
  return Object.prototype.hasOwnProperty.call(PRIMITIVE_EXAMPLES, typeName.trim());
}

function isNoise(typeName) {
  return NOISE_TYPES.has(typeName.trim());
}

function exampleForPrimitive(typeName) {
  return PRIMITIVE_EXAMPLES[typeName.trim()] || '"<value>"';
}

// Parses "Type Name { get; set; }" property declarations out of a type body.
// One level deep only (nested complex types are named, not expanded) - keeps
// generation tractable across hundreds of DTOs.
function parseProperties(body) {
  const props = [];
  const propRegex = /(?:public\s+)?([\w<>,.\[\] ?]+?)\s+(\w+)\s*\{\s*get;(?:\s*(?:private\s+|protected\s+|internal\s+)?set;)?\s*\}/g;
  let m;
  const seen = new Set();
  while ((m = propRegex.exec(body))) {
    const [, type, name] = m;
    if (['get', 'set', 'class', 'interface'].includes(name) || seen.has(name)) continue;
    seen.add(name);
    props.push({ type: type.trim().replace(/^public\s+/, ''), name });
  }
  return props;
}

function resolveType(typeName, depth = 0) {
  if (!typeName) return null;
  const cleaned = typeName.replace(/\?$/, '').trim();

  if (isNoise(cleaned)) {
    return { kind: 'noise', typeName: cleaned, isCollection: false };
  }

  const dict = parseDictionary(cleaned);
  if (dict) {
    return { kind: 'dictionary', typeName: cleaned, isCollection: false, keyType: dict.keyType, valueType: dict.valueType };
  }

  const bare = stripGenerics(cleaned);
  if (isPrimitive(bare)) {
    return { kind: 'primitive', typeName: bare, isCollection: isCollection(cleaned) };
  }

  const index = buildTypeIndex();
  const candidates = [bare, bare.replace(/^I/, '')];
  let entry = null;
  for (const c of candidates) {
    const hit = index.get(c.toLowerCase());
    if (hit) {
      entry = hit;
      break;
    }
  }

  if (!entry) {
    return { kind: 'unresolved', typeName: bare, isCollection: isCollection(cleaned) };
  }

  const props = depth < 1 ? parseProperties(entry.body) : [];
  return {
    kind: 'object',
    typeName: bare,
    isCollection: isCollection(cleaned),
    properties: props,
    filePath: entry.filePath
  };
}

function exampleValueFor(typeName, seen = new Set()) {
  const resolved = resolveType(typeName);
  if (!resolved) return 'null';
  if (resolved.kind === 'noise') return 'null';
  if (resolved.kind === 'primitive') {
    const ex = exampleForPrimitive(resolved.typeName);
    return resolved.isCollection ? `[${ex}]` : ex;
  }
  if (resolved.kind === 'dictionary') {
    return `{ "<${resolved.keyType}>": ${exampleValueFor(resolved.valueType, seen)} }`;
  }
  if (resolved.kind === 'unresolved') {
    return resolved.isCollection ? '[ /* <' + resolved.typeName + '> */ ]' : `/* <${resolved.typeName}> */`;
  }
  if (seen.has(resolved.typeName)) {
    return resolved.isCollection ? '[]' : '{}';
  }
  seen.add(resolved.typeName);
  const fields = resolved.properties
    .map((p) => `"${p.name}": ${exampleValueFor(p.type, seen)}`)
    .join(', ');
  const obj = `{ ${fields} }`;
  return resolved.isCollection ? `[${obj}]` : obj;
}

module.exports = { resolveType, exampleValueFor, isPrimitive, isNoise, exampleForPrimitive, stripGenerics, isCollection };
