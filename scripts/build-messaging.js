'use strict';

/**
 * Builds the offline-first messaging engine (TypeScript in messaging-src/) into messaging/:
 *   messaging/index.js   CommonJS (+ per-module .js and .d.ts from tsc)
 *   messaging/index.mjs  ESM bundle
 * Needs the typescript and esbuild devDependencies (`npm install`, then `npm run build:messaging`).
 * The built output is committed (like src/modules) so consumers need no build step.
 */

const { execFileSync } = require('node:child_process');
const path = require('node:path');
const fs = require('node:fs');

const root = path.join(__dirname, '..');
const out = path.join(root, 'messaging');
fs.rmSync(out, { recursive: true, force: true });
execFileSync(process.execPath, [require.resolve('typescript/bin/tsc'), '-p', path.join(root, 'messaging-src', 'tsconfig.json')], { stdio: 'inherit' });
require('esbuild').buildSync({
  entryPoints: [path.join(root, 'messaging-src', 'index.ts')],
  outfile: path.join(out, 'index.mjs'),
  bundle: true, format: 'esm', platform: 'neutral', target: 'es2020'
});
console.log('messaging/ built');
