import { Component, ViewChild } from '@angular/core';
import { jqxChatComponent } from 'jqwidgets-ng/jqxchat';

function mockReply(t: string): string {
    const q = (t || '').toLowerCase();
    if (/theme|dark|light|style/.test(q)) { return 'jqxChat inherits the active theme. Set **colorScheme** and **accentColor** to restyle it instantly.'; }
    if (/code|example|snippet/.test(q)) { return 'Here you go:\n\n```js\nchat.sendMessage(\'Hello!\');\n```'; }
    return 'You said: "' + t + '". Use the buttons on the right to drive me from code.';
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    @ViewChild('chat', { static: false }) chat: jqxChatComponent;

    logLines: string[] = [];
    get logText(): string { return this.logLines.length ? this.logLines.join('\n') : '(events will appear here)'; }
    private log(m: string): void { this.logLines.push('• ' + m); }

    send(): void { this.chat.sendMessage('Tell me about theming'); }
    addBot(): void { this.chat.addMessage('assistant', 'This message was added via **addMessage()**.'); this.log('addMessage() → assistant'); }
    count(): void { this.log('getMessages() → ' + this.chat.getMessages().length + ' messages'); }
    clear(): void { this.chat.clearConversation(); this.log('clearConversation()'); }

    sendRequest = (payload: any): Promise<string> => {
        const msgs = payload && payload.messages ? payload.messages : [];
        const text = msgs.length ? String(msgs[msgs.length - 1].content || '') : '';
        return new Promise<string>(resolve => setTimeout(() => resolve(mockReply(text)), 450));
    };
}
