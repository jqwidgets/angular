import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { jqxPanelComponent, jqxPanelModule } from 'jqwidgets-ng/jqxpanel';
import { jqxCalendarModule, jqxCalendarComponent } from 'jqwidgets-ng/jqxcalendar';
@Component({
    selector: 'app-root',
    imports: [jqxCalendarModule, jqxPanelModule],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('myCalendar') myCalendar: jqxCalendarComponent;
    @ViewChild('myPanel') myPanel: jqxPanelComponent;

    myCalendarEvent(event: any): void {
        let date = event.args.date;
        let view = event.args.view;
        let viewFrom = view.from;
        let viewTo = view.to;
        this.myPanel.clearcontent();
        if (event.type === 'viewChange') {
            this.myPanel.prepend('<div style="margin-top: 5px;">Event Type: viewChange<br/>Date: ' + date + '<br/>View: ' + viewFrom + ' - ' + viewTo + '</div>');
        }
        else {
            this.myPanel.prepend('<div style="margin-top: 5px;">Event Type: change<br/>Date: ' + date + '</div>');
        }
    }
}
