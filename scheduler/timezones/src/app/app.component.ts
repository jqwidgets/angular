﻿import { Component } from '@angular/core';

import { jqxSchedulerModule, jqxSchedulerComponent } from 'jqwidgets-ng/jqxscheduler';
@Component({
    selector: 'app-root',
    imports: [jqxSchedulerModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    date: any = new jqx.date(2016, 11, 23);

    source: any =
        {
            dataType: 'json',
            dataFields: [
                { name: 'id', type: 'string' },
                { name: 'status', type: 'string' },
                { name: 'about', type: 'string' },
                { name: 'address', type: 'string' },
                { name: 'company', type: 'string' },
                { name: 'name', type: 'string' },
                { name: 'style', type: 'string' },
                { name: 'calendar', type: 'string' },
                { name: 'start', type: 'date', format: 'yyyy-MM-dd HH:mm' },
                { name: 'end', type: 'date', format: 'yyyy-MM-dd HH:mm' }
            ],
            id: 'id',
            url: '../assets/appointments.txt'
        };

    getWidth(): any {
        if (document.body.offsetWidth < 850) {
            return '90%';
        }

        return 850;
    }


    dataAdapter: any = new jqx.dataAdapter(this.source);

    appointmentDataFields: any =
        {
            from: 'start',
            to: 'end',
            id: 'id',
            description: 'about',
            location: 'address',
            subject: 'name',
            style: 'style',
            status: 'status'
        };

    views: any[] =
        [
            { type: 'dayView', showWeekends: true, timeRuler: { hidden: false, timeZones: [{ id: 'UTC', text: 'UTC' }, { id: 'Pacific Standard Time', text: 'PST' }] } },
            { type: 'weekView', showWeekends: true, timeRuler: { hidden: false, timeZones: [{ id: 'UTC', text: 'UTC' }, { id: 'Pacific Standard Time', text: 'PST' }] } },
            'monthView'
        ];
}