/** Pluggable persistence so the outbox survives reloads. Implement for IndexedDB, AsyncStorage, SQLite, etc. */
export interface MessagingStorage {
  get(key: string): Promise<string | null>;
  set(key: string, value: string): Promise<void>;
  remove(key: string): Promise<void>;
}

export class MemoryStorage implements MessagingStorage {
  private readonly data = new Map<string, string>();
  async get(key: string) { return this.data.has(key) ? (this.data.get(key) as string) : null; }
  async set(key: string, value: string) { this.data.set(key, value); }
  async remove(key: string) { this.data.delete(key); }
}

/** localStorage-backed storage. Falls back to memory when storage is blocked (private mode, SSR). */
export class BrowserStorage implements MessagingStorage {
  private readonly fallback = new MemoryStorage();
  private usable(): Storage | null {
    try {
      const s = (globalThis as any).localStorage as Storage | undefined;
      if (!s) return null;
      s.setItem('__oasis_probe__', '1');
      s.removeItem('__oasis_probe__');
      return s;
    } catch {
      return null;
    }
  }
  async get(key: string) { const s = this.usable(); return s ? s.getItem(key) : this.fallback.get(key); }
  async set(key: string, value: string) { const s = this.usable(); if (s) s.setItem(key, value); else await this.fallback.set(key, value); }
  async remove(key: string) { const s = this.usable(); if (s) s.removeItem(key); else await this.fallback.remove(key); }
}
