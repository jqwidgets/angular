import { Component } from '@angular/core';

function mockReply(t: string): string {
    const q = (t || '').toLowerCase();
    if (/theme|dark|light|style|brand|color|match/.test(q)) { return 'Set the **accentColor** option to any CSS color, and **colorScheme** to `light`, `dark` or `auto`. No theme files required - I restyle instantly.'; }
    if (/code|example|snippet/.test(q)) { return 'Sure:\n\n```js\n$(\'#chat\').jqxChat({ colorScheme: \'dark\', accentColor: \'#ec4899\' });\n```'; }
    return 'You said: "' + t + '". Try the buttons above to recolor me at runtime.';
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    scheme = 'light';
    accent = '#6366f1';
    accents: string[] = ['#6366f1', '#2563eb', '#16a34a', '#ec4899', '#f59e0b'];
    prompts: string[] = ['Tell me about theming', 'Show me a code example'];

    messages: any[] = [
        { role: 'user', content: 'Can I match my brand color?' },
        { role: 'assistant', content: 'Absolutely - set the **accentColor** option to any CSS color, and **colorScheme** to `light`, `dark` or `auto`. No theme files required.' }
    ];

    setScheme(s: string): void { this.scheme = s; }
    setAccent(a: string): void { this.accent = a; }

    sendRequest = (payload: any): Promise<string> => {
        const msgs = payload && payload.messages ? payload.messages : [];
        const text = msgs.length ? String(msgs[msgs.length - 1].content || '') : '';
        return new Promise<string>(resolve => setTimeout(() => resolve(mockReply(text)), 450));
    };
}
