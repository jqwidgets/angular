import { Component } from '@angular/core';

function mockReply(t: string): string {
    const q = (t || '').toLowerCase();
    if (/jqwidgets|jqx|widget|component/.test(q)) { return '**jQWidgets** ships 80+ UI components - and this jqxChat assistant, shown here in floating **popup** mode.'; }
    if (/support|help|contact|get support/.test(q)) { return 'For support, head to the jQWidgets forums or your license portal - I can point you to the right doc.'; }
    if (/code|example|snippet/.test(q)) { return 'Here you go:\n\n```js\nfunction greet(name) {\n  return \'Hello, \' + name;\n}\ngreet(\'jQWidgets\');\n```'; }
    return 'You said: "' + t + '". I live in a floating launcher - click the bubble any time.';
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    prompts: string[] = ['What is jQWidgets?', 'How do I get support?'];

    sendRequest = (payload: any): Promise<string> => {
        const msgs = payload && payload.messages ? payload.messages : [];
        const text = msgs.length ? String(msgs[msgs.length - 1].content || '') : '';
        return new Promise<string>(resolve => setTimeout(() => resolve(mockReply(text)), 450));
    };
}
