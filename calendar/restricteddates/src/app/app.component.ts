﻿import { Component, OnInit } from '@angular/core';

import { jqxCalendarModule, jqxCalendarComponent } from 'jqwidgets-ng/jqxcalendar';
@Component({
    selector: 'app-root',
    imports: [jqxCalendarModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
    restrictedDates: Date[] = new Array();

    ngOnInit(): void {
        let date = new Date();
        date.setHours(0, 0, 0);
        date.setDate(2);
        let date2 = new Date();
        date2.setHours(0, 0, 0);
        date2.setDate(3);
        this.restrictedDates.push(date);
        this.restrictedDates.push(date2);
    }
}
