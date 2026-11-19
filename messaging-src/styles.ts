/** Themable via CSS custom properties on the container: --oasis-chat-bg, -fg, -accent, -muted, -bubble-own, -bubble-other, -border. */
export const MESSAGING_CSS = `
.oasis-chat{--oasis-chat-bg:#fff;--oasis-chat-fg:#14213d;--oasis-chat-muted:#6b7280;--oasis-chat-accent:#2563eb;--oasis-chat-bubble-own:#dbeafe;--oasis-chat-bubble-other:#f1f5f9;--oasis-chat-border:#e2e8f0;
display:flex;height:100%;min-height:320px;background:var(--oasis-chat-bg);color:var(--oasis-chat-fg);font:14px/1.4 system-ui,sans-serif;border:1px solid var(--oasis-chat-border);border-radius:8px;overflow:hidden;position:relative}
.oasis-chat[data-theme=dark]{--oasis-chat-bg:#0b1020;--oasis-chat-fg:#e5e7eb;--oasis-chat-muted:#94a3b8;--oasis-chat-accent:#60a5fa;--oasis-chat-bubble-own:#1e3a5f;--oasis-chat-bubble-other:#1f2937;--oasis-chat-border:#243049}
.oasis-chat *{box-sizing:border-box}
.oasis-chat__side{width:260px;flex:0 0 260px;border-right:1px solid var(--oasis-chat-border);display:flex;flex-direction:column;min-width:0}
.oasis-chat__main{flex:1;display:flex;flex-direction:column;min-width:0}
.oasis-chat__banner{padding:6px 10px;font-size:12px;background:#fef3c7;color:#92400e}
.oasis-chat[data-theme=dark] .oasis-chat__banner{background:#422006;color:#fde68a}
.oasis-chat__list{flex:1;overflow:auto;margin:0;padding:0;list-style:none}
.oasis-chat__item{padding:10px 12px;border-bottom:1px solid var(--oasis-chat-border);cursor:pointer;display:flex;justify-content:space-between;gap:8px}
.oasis-chat__item:hover,.oasis-chat__item[aria-selected=true]{background:var(--oasis-chat-bubble-other)}
.oasis-chat__name{font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.oasis-chat__preview{color:var(--oasis-chat-muted);font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.oasis-chat__badge{background:var(--oasis-chat-accent);color:#fff;border-radius:10px;padding:0 7px;font-size:12px;align-self:center}
.oasis-chat__new{padding:8px;display:flex;gap:6px;border-top:1px solid var(--oasis-chat-border)}
.oasis-chat__thread{flex:1;overflow:auto;padding:12px;display:flex;flex-direction:column;gap:6px}
.oasis-chat__msg{max-width:78%;padding:7px 10px;border-radius:12px;background:var(--oasis-chat-bubble-other);align-self:flex-start;word-wrap:break-word;overflow-wrap:anywhere}
.oasis-chat__msg[data-own=true]{background:var(--oasis-chat-bubble-own);align-self:flex-end}
.oasis-chat__meta{font-size:11px;color:var(--oasis-chat-muted);margin-top:2px;display:flex;gap:6px;justify-content:flex-end}
.oasis-chat__typing{padding:0 12px 4px;font-size:12px;color:var(--oasis-chat-muted);min-height:18px}
.oasis-chat__composer{display:flex;gap:6px;padding:8px;border-top:1px solid var(--oasis-chat-border)}
.oasis-chat input,.oasis-chat button{font:inherit}
.oasis-chat input{flex:1;min-width:0;padding:8px 10px;border:1px solid var(--oasis-chat-border);border-radius:6px;background:var(--oasis-chat-bg);color:var(--oasis-chat-fg)}
.oasis-chat button{padding:8px 12px;border:0;border-radius:6px;background:var(--oasis-chat-accent);color:#fff;cursor:pointer}
.oasis-chat button.oasis-chat__link{background:none;color:var(--oasis-chat-accent);padding:0 2px}
.oasis-chat__empty{margin:auto;color:var(--oasis-chat-muted);padding:20px;text-align:center}
.oasis-chat__back{display:none}
@media (max-width:560px){
 .oasis-chat__side{width:100%;flex-basis:100%;border-right:0}
 .oasis-chat[data-view=thread] .oasis-chat__side{display:none}
 .oasis-chat[data-view=list] .oasis-chat__main{display:none}
 .oasis-chat__back{display:inline-block}
}
`;
