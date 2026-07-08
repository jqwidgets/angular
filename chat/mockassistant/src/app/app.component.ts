import { Component } from '@angular/core';

function mockReply(t: string): string {
    const q = (t || '').toLowerCase();
    if (/jqwidgets|jqx|widget|component/.test(q)) { return '**jQWidgets** ships 80+ UI components for jQuery, Angular, React, Vue and Web Components - grids, charts, schedulers, and this **jqxChat** assistant.'; }
    if (/code|example|snippet|function/.test(q)) { return 'Here is a small example:\n\n```js\nfunction greet(name) {\n  return \'Hello, \' + name;\n}\ngreet(\'jQWidgets\');\n```'; }
    if (/markdown|format|bold|link/.test(q)) { return 'I render lightweight Markdown safely: **bold**, *italic*, `inline code`, fenced blocks and [links](https://www.jqwidgets.com). Everything is HTML-escaped first.'; }
    if (/theme|dark|light|style/.test(q)) { return 'jqxChat inherits the active theme. Switch the page theme and the chat - bubbles, buttons, avatars and the launcher - all follow along.'; }
    return 'You said: "' + t + '". This is an offline mock - no key, no network. Swap in a real provider to go live.';
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    prompts: string[] = ['What is jQWidgets?', 'Show me a code example', 'How does markdown rendering work?', 'Tell me about theming'];

    sendRequest = (payload: any): Promise<string> => {
        const msgs = payload && payload.messages ? payload.messages : [];
        const text = msgs.length ? String(msgs[msgs.length - 1].content || '') : '';
        return new Promise<string>(resolve => setTimeout(() => resolve(mockReply(text)), 450));
    };
}
