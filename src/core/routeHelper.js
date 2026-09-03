'use strict';

const TOKEN_PATTERN = /\{(\w+)(?::\w+)?\}/g;

/**
 * Resolves a route template like "get-by-id/{id}" against an args object,
 * substituting path tokens and returning the resolved path plus whatever
 * args were *not* consumed as path tokens (these become the query/body).
 */
function resolveRoute(routeTemplate, args = {}) {
  const consumed = new Set();
  const path = routeTemplate.replace(TOKEN_PATTERN, (match, name) => {
    const key = Object.keys(args).find((k) => k.toLowerCase() === name.toLowerCase());
    consumed.add(key);
    const value = key !== undefined ? args[key] : undefined;
    if (value === undefined) {
      throw new Error(`Missing required route parameter "${name}" for route "${routeTemplate}"`);
    }
    return encodeURIComponent(value);
  });

  const rest = {};
  for (const [key, value] of Object.entries(args)) {
    if (!consumed.has(key)) rest[key] = value;
  }

  return { path, rest };
}

/**
 * Builds a bound method for a single OASIS endpoint operation.
 * @param {import('./httpClient').HttpClient} http
 * @param {string} routePrefix e.g. "api/avatar"
 * @param {string} verb GET | POST | PUT | DELETE
 * @param {string} route route template relative to routePrefix, e.g. "get-by-id/{id}"
 */
function makeOperation(http, routePrefix, verb, route) {
  return async function operation(args = {}) {
    const { path, rest } = resolveRoute(route, args);
    const fullPath = path ? `${routePrefix}/${path}` : routePrefix;
    const hasBody = Object.keys(rest).length > 0;

    if (verb === 'GET') {
      return http.get(fullPath, { query: hasBody ? rest : undefined });
    }
    return http.request(verb, fullPath, { body: hasBody ? rest : undefined });
  };
}

module.exports = { resolveRoute, makeOperation };
