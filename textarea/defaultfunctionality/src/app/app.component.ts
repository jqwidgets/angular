﻿import { Component } from '@angular/core';

import { jqxTextAreaModule, jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
@Component({
    selector: 'app-root',
    imports: [jqxTextAreaModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    generateSource(): string[] {
        let quotes: string[] = [];
        quotes.push('Life is a dream for the wise, a game for the fool, a comedy for the rich, a tragedy for the poor.');
        quotes.push('Yesterday is not ours to recover, but tomorrow is ours to win or lose.');
        quotes.push('It does not matter how slowly you go as long as you do not stop.');
        quotes.push('Success depends upon previous preparation, and without such preparation there is sure to be failure.');
        quotes.push('Better a diamond with a flaw than a pebble without.');
        quotes.push('To succeed in life, you need two things: ignorance and confidence.');
        quotes.push('A successful man is one who can lay a firm foundation with the bricks others have thrown at him.');
        quotes.push('Sleep is the best meditation.');

        return quotes;
    }
}