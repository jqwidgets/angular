import { Component, ViewEncapsulation } from '@angular/core';

import { jqxNotificationModule, jqxNotificationComponent } from 'jqwidgets-ng/jqxnotification';
@Component({
    selector: 'app-root',
    imports: [jqxNotificationModule],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {

}