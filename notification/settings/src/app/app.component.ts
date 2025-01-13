﻿import { Component, ViewChild, ElementRef } from '@angular/core';
import { jqxNotificationModule, jqxNotificationComponent } from 'jqwidgets-ng/jqxnotification';
import { jqxCheckBoxComponent, jqxCheckBoxModule } from 'jqwidgets-ng/jqxcheckbox';
import { jqxButtonComponent, jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';

@Component({
    selector: 'app-root',
    imports: [jqxNotificationModule, jqxCheckBoxModule, jqxButtonModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myNotification') myNotification: jqxNotificationComponent;

    source: string[] = ["info", "warning", "success", "error", "mail", "time", "null"]

    openNotificationClick(): void {
        this.myNotification.open();
    };

    closeLastNotificationClick(): void {
        this.myNotification.closeLast();
    };

    closeNotificationsClick(): void {
        this.myNotification.closeAll();
    };

    topLeftChecked(): void {
        this.myNotification.position('top-left');
    };

    topRightChecked(): void {
        this.myNotification.position('top-right');
    };

    bottomLeftChecked(): void {
        this.myNotification.position('bottom-left');
    };

    bottomRightChecked(): void {
        this.myNotification.position('bottom-right');
    };

    change(event: any): void {
        let choice = event.args.item.label;
        let newTemplate;
        if (choice != "null") {
            newTemplate = choice;
        } else {
            newTemplate = null;
        }

        this.myNotification.template(newTemplate);
    };

    closeOnClickCheckboxChange(event: any): void {
        let checked = event.args.checked;
        this.myNotification.closeOnClick(checked);
    };

    autoCloseCheckBoxChange(event: any): void {
        let checked = event.args.checked;
        this.myNotification.autoClose(checked);
    };

    blinkCheckboxChange(event: any): void {
        let checked = event.args.checked;
        this.myNotification.blink(checked);
    };
}