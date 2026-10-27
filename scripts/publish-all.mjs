#!/usr/bin/env node
/**
 * Publishes every OASIS JS SDK package (WEB4-WEB10) from your machine in one go.
 *
 *   node scripts/publish-all.mjs                 publish any package whose version isn't on npm yet
 *   node scripts/publish-all.mjs --bump patch    bump (patch|minor|major), commit, push, then publish
 *   node scripts/publish-all.mjs --dry-run       show what would happen
 *   node scripts/publish-all.mjs --otp 123456    pass a 2FA code (codes expire in ~30 s;
 *                                                omit it and npm prompts per package)
 *
 * Each package's tests must pass and its repo must be clean and in sync, or it is skipped.
 * Expects the package repos side by side (C:\Source\OASIS-API-Javascri*-Package-WEB*).
 * With the GitHub "publish" workflow set up, a push publishes on its own and this
 * script is only needed as a fallback.
 */

import { execSync, spawnSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');
const REPOS = [
  'OASIS-API-Javascipt-Package-WEB4',
  ...[5, 6, 7, 8, 9, 10].map((n) => `OASIS-API-Javascript-Package-WEB${n}`),
];

const args = process.argv.slice(2);
const flag = (name) => {
  const i = args.indexOf(name);
  return i === -1 ? undefined : args[i + 1];
};
const dryRun = args.includes('--dry-run');
const bump = flag('--bump');
const otp = flag('--otp');
if (bump && !['patch', 'minor', 'major'].includes(bump)) {
  console.error('--bump must be patch, minor or major');
  process.exit(2);
}

const sh = (cmd, cwd) => execSync(cmd, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
const run = (cmd, argv, cwd) => spawnSync(cmd, argv, { cwd, stdio: 'inherit', shell: process.platform === 'win32' }).status === 0;
const pkgOf = (dir) => JSON.parse(readFileSync(join(dir, 'package.json'), 'utf8'));
const onNpm = (name, version) => {
  try { return sh(`npm view ${name}@${version} version`) === version; } catch { return false; }
};

const results = [];
for (const repo of REPOS) {
  const dir = join(ROOT, repo);
  const note = (status) => { results.push([repo, status]); console.log(`  → ${status}\n`); };
  console.log(`== ${repo}`);
  if (!existsSync(join(dir, 'package.json'))) { note('skipped: not found'); continue; }

  if (sh('git status --porcelain', dir)) { note('skipped: uncommitted changes'); continue; }
  sh('git fetch -q', dir);
  if (sh('git rev-list --count HEAD...@{u}', dir) !== '0') { note('skipped: not in sync with origin'); continue; }
  if (!run('npm', ['test', '--silent'], dir)) { note('skipped: tests fail'); continue; }

  if (bump && !dryRun) {
    sh(`npm version ${bump} --no-git-tag-version`, dir);
    const v = pkgOf(dir).version;
    sh(`git commit -qam "release: ${v}"`, dir);
    sh('git push -q', dir);
  }

  const { name, version } = pkgOf(dir);
  if (!bump && onNpm(name, version)) { note(`${name}@${version} already on npm`); continue; }
  if (dryRun) { note(`would publish ${name}@${version}${bump ? ` (after ${bump} bump)` : ''}`); continue; }

  const ok = run('npm', ['publish', '--access', 'public', ...(otp ? ['--otp', otp] : [])], dir);
  note(ok ? `published ${name}@${version}` : `FAILED to publish ${name}@${version}`);
}

console.log('Summary');
for (const [repo, status] of results) console.log(`  ${repo}: ${status}`);
process.exit(results.some(([, s]) => s.startsWith('FAILED')) ? 1 : 0);
