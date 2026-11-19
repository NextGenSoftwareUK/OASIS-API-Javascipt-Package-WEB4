import { MessagingApi, MessagingApiError } from '../api';
import type { ServerConversation, ServerMessage, SyncPage, SendRequest, ServerGroup } from '../types';
import type { SocketLike } from '../controller';

export class FakeApi {
  origin = 'https://api.test';
  online = true;
  reject: string | null = null;
  sent: SendRequest[] = [];
  serverMessages: ServerMessage[] = [];
  delivered: string[][] = [];
  read: string[][] = [];
  syncCalls: (string | null | undefined)[] = [];
  pageSize = 100;
  tickets = 0;
  conversationList: ServerConversation[] = [];

  private guard() { if (!this.online) throw new MessagingApiError('offline', { network: true }); }
  async send(r: SendRequest): Promise<ServerMessage> {
    this.guard();
    if (this.reject) throw new MessagingApiError(this.reject, { network: false, status: 400 });
    if (!this.sent.some(s => s.id === r.id)) this.sent.push(r);
    return { id: r.id, fromAvatarId: 'me', content: r.content, receivedAt: '2026-01-01T00:00:00Z' };
  }
  async sync(since: string | null | undefined): Promise<SyncPage> {
    this.guard();
    this.syncCalls.push(since);
    const rest = this.serverMessages.filter(m => !since || (m.receivedAt as string) > since);
    const page = rest.slice(0, this.pageSize);
    return { messages: page, hasMore: rest.length > page.length, nextCursor: page.length ? page[page.length - 1].receivedAt : since };
  }
  async conversations(): Promise<ServerConversation[]> { this.guard(); return this.conversationList; }
  async markDelivered(ids: string[]) { this.guard(); this.delivered.push(ids); return true; }
  async markRead(ids: string[]) { this.guard(); this.read.push(ids); return true; }
  async realtimeTicket() { this.guard(); this.tickets++; return 'tkt-' + this.tickets; }
  async createGroup(title: string, ids: string[]): Promise<ServerGroup> {
    this.guard();
    return { id: 'g1', title, createdByAvatarId: 'me', createdAt: '2026-01-02T00:00:00Z', participantIds: ['me', ...ids] };
  }
  async groups() { return []; }
  async addGroupMembers() { return {} as any; }
  async leaveGroup() { return true; }
}
export const asApi = (f: FakeApi) => f as unknown as MessagingApi;

export class FakeSocket implements SocketLike {
  onopen: any = null; onmessage: any = null; onclose: any = null; onerror: any = null;
  readyState = 0; sentFrames: string[] = [];
  constructor(public url: string) {}
  send(d: string) { this.sentFrames.push(d); }
  close() { this.readyState = 3; }
  open() { this.readyState = 1; this.onopen?.(); }
  push(ev: unknown) { this.onmessage?.({ data: JSON.stringify(ev) }); }
  drop() { this.readyState = 3; this.onclose?.(); }
}

export const tick = () => new Promise<void>(r => setImmediate(r));
export async function settle(n = 6) { for (let i = 0; i < n; i++) await tick(); }

export function makeTimers() {
  const pending: { fn: () => void; ms: number; id: number; alive: boolean }[] = [];
  let id = 0;
  return {
    pending,
    timers: {
      setTimeout: (fn: () => void, ms: number) => { const t = { fn, ms, id: ++id, alive: true }; pending.push(t); return t.id; },
      clearTimeout: (h: number) => { const t = pending.find(p => p.id === h); if (t) t.alive = false; }
    },
    fireNext() { const t = pending.find(p => p.alive); if (t) { t.alive = false; t.fn(); } return t?.ms; }
  };
}
