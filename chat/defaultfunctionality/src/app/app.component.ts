import { Component } from '@angular/core';

/* Shared offline reply used by the chat demos so they run without an API key. */
function mockReply(t: string): string {
    const q = (t || '').toLowerCase();
    if (/jqwidgets|jqx|widget|component/.test(q)) { return '**jQWidgets** ships 80+ UI components for jQuery, Angular, React, Vue and Web Components - grids, charts, schedulers, and this **jqxChat** assistant.'; }
    if (/code|example|snippet|function/.test(q)) { return 'Here is a small example:\n\n```js\nfunction greet(name) {\n  return \'Hello, \' + name;\n}\ngreet(\'jQWidgets\');\n```'; }
    if (/markdown|format|bold|link/.test(q)) { return 'I render lightweight Markdown safely: **bold**, *italic*, `inline code`, fenced blocks and [links](https://www.jqwidgets.com).'; }
    if (/stream/.test(q)) { return 'With **stream: true** I render tokens as they arrive via appendDelta(), so answers appear word by word.'; }
    if (/theme|dark|light|style|brand|color/.test(q)) { return 'jqxChat inherits the active theme. Set **colorScheme** to `light`, `dark` or `auto`, and **accentColor** to any CSS color.'; }
    return 'You said: "' + t + '". Offline I echo you back; set an apiKey or proxyUrl and I stream a real answer here.';
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    prompts: string[] = ['What is jQWidgets?', 'Show me a code example', 'Explain streaming responses'];

    sendRequest = (payload: any): Promise<string> => {
        const msgs = payload && payload.messages ? payload.messages : [];
        const text = msgs.length ? String(msgs[msgs.length - 1].content || '') : '';
        return new Promise<string>(resolve => setTimeout(() => resolve(mockReply(text)), 450));
    };
}
