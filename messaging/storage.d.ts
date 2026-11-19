/** Pluggable persistence so the outbox survives reloads. Implement for IndexedDB, AsyncStorage, SQLite, etc. */
export interface MessagingStorage {
    get(key: string): Promise<string | null>;
    set(key: string, value: string): Promise<void>;
    remove(key: string): Promise<void>;
}
export declare class MemoryStorage implements MessagingStorage {
    private readonly data;
    get(key: string): Promise<string | null>;
    set(key: string, value: string): Promise<void>;
    remove(key: string): Promise<void>;
}
/** localStorage-backed storage. Falls back to memory when storage is blocked (private mode, SSR). */
export declare class BrowserStorage implements MessagingStorage {
    private readonly fallback;
    private usable;
    get(key: string): Promise<string | null>;
    set(key: string, value: string): Promise<void>;
    remove(key: string): Promise<void>;
}
