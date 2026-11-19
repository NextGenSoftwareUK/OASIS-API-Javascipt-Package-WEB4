"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newId = void 0;
/** RFC 4122 v4 id. Clients generate message ids so retries are idempotent on the server. */
function newId() {
    const c = globalThis.crypto;
    if (c && typeof c.randomUUID === 'function')
        return c.randomUUID();
    const bytes = new Uint8Array(16);
    if (c && typeof c.getRandomValues === 'function')
        c.getRandomValues(bytes);
    else
        for (let i = 0; i < 16; i++)
            bytes[i] = Math.floor(Math.random() * 256);
    bytes[6] = (bytes[6] & 0x0f) | 0x40;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;
    const h = Array.from(bytes, b => b.toString(16).padStart(2, '0')).join('');
    return `${h.slice(0, 8)}-${h.slice(8, 12)}-${h.slice(12, 16)}-${h.slice(16, 20)}-${h.slice(20)}`;
}
exports.newId = newId;
