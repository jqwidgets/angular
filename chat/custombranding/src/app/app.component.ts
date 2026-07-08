import { Component } from '@angular/core';

function mockReply(t: string): string {
    const q = (t || '').toLowerCase();
    if (/jqwidgets|jqx|widget|component/.test(q)) { return 'I am **Nova**. jQWidgets ships 80+ UI components - and this jqxChat assistant you can brand as your own.'; }
    if (/code|example|snippet/.test(q)) { return 'Sure:\n\n```js\nfunction greet(name) {\n  return \'Hello, \' + name;\n}\ngreet(\'jQWidgets\');\n```'; }
    if (/brand|logo|color|avatar/.test(q)) { return 'This chat is branded with a custom **botName**, **avatars**, **title** and **accentColor** - all set through options.'; }
    return 'You said: "' + t + '". I am Nova, your product guide - offline for this demo.';
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    prompts: string[] = ['What is jQWidgets?', 'Show me a code example'];

    botAvatar: string = 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><rect width="40" height="40" rx="20" fill="#6366f1"/><text x="20" y="27" font-size="20" fill="#fff" text-anchor="middle" font-family="sans-serif" font-weight="700">N</text></svg>');
    userAvatar: string = 'data:image/svg+xml;utf8,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><rect width="40" height="40" rx="20" fill="#0891b2"/><text x="20" y="27" font-size="20" fill="#fff" text-anchor="middle" font-family="sans-serif" font-weight="700">M</text></svg>');

    sendRequest = (payload: any): Promise<string> => {
        const msgs = payload && payload.messages ? payload.messages : [];
        const text = msgs.length ? String(msgs[msgs.length - 1].content || '') : '';
        return new Promise<string>(resolve => setTimeout(() => resolve(mockReply(text)), 450));
    };
}
