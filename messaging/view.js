"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMessagingView = exports.tick = void 0;
const styles_1 = require("./styles");
const STYLE_ID = 'oasis-messaging-styles';
function el(doc, tag, cls, text) {
    const e = doc.createElement(tag);
    if (cls)
        e.className = cls;
    if (text !== undefined)
        e.textContent = text;
    return e;
}
function tick(m) {
    if (!m.isOwn)
        return '';
    switch (m.state) {
        case 'sending': return '🕓';
        case 'queued': return '🕓 queued';
        case 'sent': return '✓';
        case 'delivered': return '✓✓';
        case 'read': return '✓✓ read';
        case 'failed': return '⚠ failed';
        default: return '';
    }
}
exports.tick = tick;
/**
 * Mounts a complete chat UI (conversation list, thread, composer, offline banner, receipts, typing, groups) into
 * `container`. Plain DOM with no framework: every OASIS UI kit wraps this, and all user text is set via
 * textContent, never innerHTML.
 */
function createMessagingView(container, controller, options = {}) {
    const doc = container.ownerDocument;
    if (!doc.getElementById(STYLE_ID)) {
        const style = el(doc, 'style');
        style.id = STYLE_ID;
        style.textContent = styles_1.MESSAGING_CSS;
        (doc.head || doc.documentElement).appendChild(style);
    }
    const name = options.resolveName ?? ((id) => id.slice(0, 8));
    let selected = options.initialConversationId ?? null;
    let state = controller.getState();
    const root = el(doc, 'div', 'oasis-chat');
    root.setAttribute('data-theme', options.theme ?? 'light');
    root.setAttribute('data-view', selected ? 'thread' : 'list');
    const side = el(doc, 'div', 'oasis-chat__side');
    const banner = el(doc, 'div', 'oasis-chat__banner');
    banner.setAttribute('role', 'status');
    const list = el(doc, 'ul', 'oasis-chat__list');
    list.setAttribute('role', 'listbox');
    side.append(banner, list);
    if (options.allowNewConversations !== false) {
        const form = el(doc, 'form', 'oasis-chat__new');
        const idInput = el(doc, 'input');
        idInput.placeholder = 'Avatar id to chat with';
        idInput.setAttribute('aria-label', 'Avatar id to chat with');
        const go = el(doc, 'button', undefined, 'Chat');
        go.type = 'submit';
        form.append(idInput, go);
        form.addEventListener('submit', ev => {
            ev.preventDefault();
            const id = idInput.value.trim();
            if (!id)
                return;
            idInput.value = '';
            select(`direct:${id}`);
        });
        side.appendChild(form);
    }
    const main = el(doc, 'div', 'oasis-chat__main');
    const header = el(doc, 'div', 'oasis-chat__item');
    const back = el(doc, 'button', 'oasis-chat__back oasis-chat__link', '←');
    back.type = 'button';
    back.setAttribute('aria-label', 'Back to conversations');
    back.addEventListener('click', () => { selected = null; root.setAttribute('data-view', 'list'); render(); });
    const title = el(doc, 'div', 'oasis-chat__name');
    header.append(back, title);
    const thread = el(doc, 'div', 'oasis-chat__thread');
    thread.setAttribute('role', 'log');
    thread.setAttribute('aria-live', 'polite');
    const typing = el(doc, 'div', 'oasis-chat__typing');
    const composer = el(doc, 'form', 'oasis-chat__composer');
    const input = el(doc, 'input');
    input.placeholder = options.placeholder ?? 'Type a message…';
    input.setAttribute('aria-label', 'Message');
    input.autocomplete = 'off';
    const send = el(doc, 'button', undefined, 'Send');
    send.type = 'submit';
    composer.append(input, send);
    main.append(header, thread, typing, composer);
    root.append(side, main);
    container.appendChild(root);
    function convoOf(id) { return state.conversations.find(c => c.id === id); }
    function convoTitle(id) {
        const c = convoOf(id);
        if (c?.isGroup)
            return c.title || 'Group';
        const other = c?.otherAvatarId ?? (id.startsWith('direct:') ? id.slice(7) : id);
        return name(other);
    }
    function select(id) {
        selected = id;
        root.setAttribute('data-view', 'thread');
        void controller.markConversationRead(id);
        render();
        input.focus();
    }
    input.addEventListener('input', () => {
        if (!selected)
            return;
        const c = convoOf(selected);
        if (c?.isGroup)
            controller.sendTyping({ conversationId: selected });
        else
            controller.sendTyping({ toAvatarId: c?.otherAvatarId ?? selected.replace(/^direct:/, '') });
    });
    composer.addEventListener('submit', ev => {
        ev.preventDefault();
        const text = input.value.trim();
        if (!text || !selected)
            return;
        input.value = '';
        const c = convoOf(selected);
        if (c?.isGroup || (!selected.startsWith('direct:')))
            void controller.sendToGroup(selected, text);
        else
            void controller.sendDirect(selected.slice(7), text);
    });
    function render() {
        banner.hidden = state.connection === 'online' && state.pendingCount === 0 && !state.authRequired;
        banner.textContent = state.authRequired
            ? `Your session expired — sign in again to send your ${state.pendingCount || ''} waiting message(s). Nothing is lost.`
            : state.connection === 'online'
                ? `${state.pendingCount} message(s) sending…`
                : state.connection === 'connecting' ? 'Connecting…'
                    : `Offline — messages are saved and will send when you reconnect${state.pendingCount ? ` (${state.pendingCount} waiting)` : ''}.`;
        list.textContent = '';
        if (!state.conversations.length && !selected)
            list.appendChild(el(doc, 'li', 'oasis-chat__empty', 'No conversations yet.'));
        for (const c of state.conversations) {
            const li = el(doc, 'li', 'oasis-chat__item');
            li.setAttribute('role', 'option');
            li.setAttribute('aria-selected', String(c.id === selected));
            li.tabIndex = 0;
            const text = el(doc, 'div');
            text.style.minWidth = '0';
            text.append(el(doc, 'div', 'oasis-chat__name', convoTitle(c.id)), el(doc, 'div', 'oasis-chat__preview', c.lastMessage?.content ?? ''));
            li.appendChild(text);
            if (c.unreadCount > 0)
                li.appendChild(el(doc, 'span', 'oasis-chat__badge', String(c.unreadCount)));
            li.addEventListener('click', () => select(c.id));
            li.addEventListener('keydown', e => { if (e.key === 'Enter')
                select(c.id); });
            list.appendChild(li);
        }
        const has = !!selected;
        header.hidden = !has;
        thread.hidden = !has;
        composer.hidden = !has;
        typing.hidden = !has;
        if (!has)
            return;
        title.textContent = convoTitle(selected);
        const msgs = state.messages[selected] ?? [];
        const atBottom = thread.scrollHeight - thread.scrollTop - thread.clientHeight < 60;
        thread.textContent = '';
        if (!msgs.length)
            thread.appendChild(el(doc, 'div', 'oasis-chat__empty', 'Say hello 👋'));
        for (const m of msgs) {
            const bubble = el(doc, 'div', 'oasis-chat__msg');
            bubble.setAttribute('data-own', String(m.isOwn));
            bubble.setAttribute('data-state', m.state);
            if (!m.isOwn && convoOf(selected)?.isGroup)
                bubble.appendChild(el(doc, 'div', 'oasis-chat__preview', name(m.fromAvatarId)));
            bubble.appendChild(el(doc, 'div', undefined, m.content));
            const meta = el(doc, 'div', 'oasis-chat__meta');
            meta.appendChild(el(doc, 'span', undefined, new Date(m.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })));
            const t = tick(m);
            if (t)
                meta.appendChild(el(doc, 'span', undefined, t));
            if (m.state === 'failed') {
                const retry = el(doc, 'button', 'oasis-chat__link', 'Retry');
                retry.type = 'button';
                retry.addEventListener('click', () => void controller.retry(m.id));
                meta.appendChild(retry);
            }
            bubble.appendChild(meta);
            thread.appendChild(bubble);
        }
        if (atBottom)
            thread.scrollTop = thread.scrollHeight;
        const who = (state.typing[selected] ?? []).map(name);
        typing.textContent = who.length ? `${who.join(', ')} ${who.length > 1 ? 'are' : 'is'} typing…` : '';
    }
    const unsubscribe = controller.subscribe(s => {
        state = s;
        render();
        // New incoming messages in the open conversation are read immediately.
        if (selected && (s.messages[selected] ?? []).some(m => !m.isOwn && m.state !== 'read'))
            void controller.markConversationRead(selected);
    });
    return {
        select,
        destroy() { unsubscribe(); root.remove(); }
    };
}
exports.createMessagingView = createMessagingView;
