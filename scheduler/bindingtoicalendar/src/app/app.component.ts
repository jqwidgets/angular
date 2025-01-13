﻿import { Component, ViewChild } from '@angular/core';


import { jqxSchedulerModule, jqxSchedulerComponent } from 'jqwidgets-ng/jqxscheduler';
@Component({
    selector: 'app-root',
    imports: [jqxSchedulerModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myScheduler') myScheduler: jqxSchedulerComponent;

    source: any =
        {
            dataType: 'ics',
            url: '../assets/icalendar.txt'
        };

    getWidth(): any {
        if (document.body.offsetWidth < 850) {
            return '90%';
        }

        return 850;
    }

    adapter: any = new jqx.dataAdapter(this.source);

    appointmentDataFields: any =
        {
            from: 'DTSTART',
            to: 'DTEND',
            id: 'UID',
            description: 'DESCRIPTION',
            location: 'LOCATION',
            subject: 'SUMMARY',
            recurrencePattern: 'RRULE',
            recurrenceException: 'EXDATE',
            status: 'STATUS'
        };

    views: string[] =
        [
            'dayView',
            'weekView',
            'monthView'
        ];

    date: any = new jqx.date(2016, 11, 23);

    ready = (): void => {
        this.myScheduler.scrollTop(200);
    }
}