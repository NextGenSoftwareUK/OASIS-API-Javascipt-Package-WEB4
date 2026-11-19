"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserStorage = exports.MemoryStorage = void 0;
class MemoryStorage {
    constructor() {
        this.data = new Map();
    }
    async get(key) { return this.data.has(key) ? this.data.get(key) : null; }
    async set(key, value) { this.data.set(key, value); }
    async remove(key) { this.data.delete(key); }
}
exports.MemoryStorage = MemoryStorage;
/** localStorage-backed storage. Falls back to memory when storage is blocked (private mode, SSR). */
class BrowserStorage {
    constructor() {
        this.fallback = new MemoryStorage();
    }
    usable() {
        try {
            const s = globalThis.localStorage;
            if (!s)
                return null;
            s.setItem('__oasis_probe__', '1');
            s.removeItem('__oasis_probe__');
            return s;
        }
        catch {
            return null;
        }
    }
    async get(key) { const s = this.usable(); return s ? s.getItem(key) : this.fallback.get(key); }
    async set(key, value) { const s = this.usable(); if (s)
        s.setItem(key, value);
    else
        await this.fallback.set(key, value); }
    async remove(key) { const s = this.usable(); if (s)
        s.removeItem(key);
    else
        await this.fallback.remove(key); }
}
exports.BrowserStorage = BrowserStorage;
