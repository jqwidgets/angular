﻿import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { jqxNotificationComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxnotification.ts';
import { jqxInputComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxinput.ts';
import { jqxTextAreaComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtextarea.ts';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('jqxNotification') jqxNotification: jqxNotificationComponent;
    @ViewChild('name') name: jqxInputComponent;
    @ViewChild('email') email: jqxInputComponent;
    @ViewChild('comment') comment: jqxTextAreaComponent;

    click(): void {
        this.name.val('');
        this.email.val('');
        this.comment.val('');
        this.jqxNotification.open();
    };
}