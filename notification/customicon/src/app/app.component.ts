import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { jqxInputComponent, jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxTextAreaComponent, jqxTextAreaModule } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtextarea.ts';

import { jqxNotificationModule, jqxNotificationComponent } from 'jqwidgets-ng/jqxnotification';
import { jqxButtonComponent, jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';

@Component({
    selector: 'app-root',
    imports: [jqxNotificationModule, jqxInputModule, jqxTextAreaModule, jqxButtonModule],
    standalone: true,
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