import { Component, ViewChild, ElementRef } from '@angular/core';

import { jqxPanelComponent, jqxPanelModule } from 'jqwidgets-ng/jqxpanel';
import { jqxButtonComponent, jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';

import { jqxNotificationModule, jqxNotificationComponent } from 'jqwidgets-ng/jqxnotification';

@Component({
    selector: 'app-root',
    imports: [jqxNotificationModule, jqxPanelModule, jqxButtonModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('jqxNotification') jqxNotification: jqxNotificationComponent;
    @ViewChild('eventsPanel') eventsPanel: jqxPanelComponent;
    @ViewChild('messagePanel') messagePanel: ElementRef;

    writeEventType(event: any): void {
        this.eventsPanel.append(event.type + "<br />");
    };

    open(event: any): void {
        this.writeEventType(event);
    };

    close(event: any): void {
        this.writeEventType(event);
    };

    click(event: any): void {
        this.writeEventType(event);
        this.messagePanel.nativeElement.style.display = 'inline-block';
    };

    clickCheckMail(): void {
        this.jqxNotification.open();
    };
}