﻿import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    date: any = new jqx.date(2018, 11, 23);

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
        url: '../sampledata/appointments.txt'
    };
	
	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}


    dataAdapter: any = new jqx.dataAdapter(this.source);

    appointmentDataFields: any =
    {
        from: "start",
        to: "end",
        id: "id",
        description: "about",
        location: "address",
        subject: "name",
        style: "style",
        status: "status"
    };

    views: any[] =
    [
        { type: "dayView", showWeekends: false, timeRuler: { hidden: false } },
        {
            type: "weekView", workTime:
                {
                    fromDayOfWeek: 1,
                    toDayOfWeek: 5,
                    fromHour: 7,
                    toHour: 19
                }
        }
    ];
}