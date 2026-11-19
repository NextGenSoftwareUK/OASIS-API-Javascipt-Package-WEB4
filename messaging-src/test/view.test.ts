import { test } from 'node:test';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';
import { MessagingController } from '../controller';
import { createMessagingView, tick as tickText } from '../view';
import { FakeApi, asApi, settle } from './fakes';

function mount() {
  const dom = new JSDOM('<!doctype html><body><div id="root"></div></body>');
  const api = new FakeApi();
  const c = new MessagingController({ api: asApi(api), avatarId: 'me', realtime: false });
  const view = createMessagingView(dom.window.document.getElementById('root') as HTMLElement, c, { resolveName: id => id.toUpperCase() });
  return { dom, api, c, view, doc: dom.window.document };
}

test('renders conversations, sends from the composer, and shows ticks', async () => {
  const { api, c, view, doc } = mount();
  api.serverMessages = [{ id: '1', fromAvatarId: 'bob', toAvatarId: 'me', content: 'hey', receivedAt: '2026-01-01T00:00:01Z' }];
  await c.start();
  await settle();
  assert.equal(doc.querySelector('.oasis-chat__name')!.textContent, 'BOB');
  assert.equal(doc.querySelector('.oasis-chat__badge')?.textContent, '1');

  view.select('direct:bob');
  await settle();
  const input = doc.querySelector('.oasis-chat__composer input') as HTMLInputElement;
  input.value = 'reply';
  doc.querySelector('.oasis-chat__composer')!.dispatchEvent(new (doc.defaultView as any).Event('submit', { cancelable: true, bubbles: true }));
  await settle();
  assert.equal(api.sent[0].content, 'reply');
  const bubbles = Array.from(doc.querySelectorAll('.oasis-chat__msg'));
  assert.equal(bubbles.length, 2);
  assert.match(bubbles[1].textContent!, /reply/);
  assert.match(bubbles[1].textContent!, /✓/);
  assert.equal(doc.querySelector('.oasis-chat__badge'), null, 'conversation is read once open');
  view.destroy();
});

test('shows the offline banner with the waiting count', async () => {
  const { api, c, doc } = mount();
  await c.start();
  api.online = false;
  await c.sendDirect('bob', 'queued one');
  await settle();
  const banner = doc.querySelector('.oasis-chat__banner') as HTMLElement;
  assert.equal(banner.hidden, false);
  assert.match(banner.textContent!, /Offline/);
  assert.match(banner.textContent!, /1 waiting/);
});

test('message text is never interpreted as HTML', async () => {
  const { api, c, view, doc } = mount();
  api.serverMessages = [{ id: '1', fromAvatarId: 'bob', toAvatarId: 'me', content: '<img src=x onerror=alert(1)><b>bold</b>', receivedAt: '2026-01-01T00:00:01Z' }];
  await c.start();
  view.select('direct:bob');
  await settle();
  assert.equal(doc.querySelector('.oasis-chat__thread img'), null);
  assert.equal(doc.querySelector('.oasis-chat__thread b'), null);
  assert.match(doc.querySelector('.oasis-chat__msg')!.textContent!, /<img src=x/);
});

test('tick text per state', () => {
  const base = { id: '1', conversationId: 'c', fromAvatarId: 'me', content: '', createdAt: '', isOwn: true } as any;
  assert.equal(tickText({ ...base, state: 'sent' }), '✓');
  assert.equal(tickText({ ...base, state: 'delivered' }), '✓✓');
  assert.equal(tickText({ ...base, state: 'failed' }), '⚠ failed');
  assert.equal(tickText({ ...base, isOwn: false, state: 'received' }), '');
});

test('failed messages offer Retry', async () => {
  const { api, c, view, doc } = mount();
  await c.start();
  api.reject = 'bad';
  await c.sendDirect('bob', 'x');
  await settle();
  view.select('direct:bob');
  await settle();
  const retry = doc.querySelector('.oasis-chat__meta button') as HTMLButtonElement;
  assert.ok(retry);
  api.reject = null;
  retry.click();
  await settle();
  assert.equal(api.sent.length, 1);
});
