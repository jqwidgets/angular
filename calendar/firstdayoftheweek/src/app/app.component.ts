import { Component, ViewChild } from '@angular/core';

import { jqxDropDownListModule, jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxCalendarModule, jqxCalendarComponent } from 'jqwidgets-ng/jqxcalendar';
@Component({
    selector: 'app-root',
    imports: [jqxCalendarModule, jqxDropDownListModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myCalendar') myCalendar: jqxCalendarComponent;
    @ViewChild('myDropDownList') myDropDownList: jqxDropDownListComponent;

    days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    myDropDownListOnSelect(event: any): void {
        let index = event.args.index;
        if (index === 6) {
            index = -1;
        }
        this.myCalendar.firstDayOfWeek(index + 1);
    };
}
