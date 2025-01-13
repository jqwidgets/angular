﻿import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { jqxSchedulerModule, jqxSchedulerComponent } from 'jqwidgets-ng/jqxscheduler';
import { jqxButtonComponent, jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';

@Component({
    selector: 'app-root',
    imports: [jqxSchedulerModule, jqxButtonModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('scheduler') myScheduler: jqxSchedulerComponent;

    getWidth(): any {
        if (document.body.offsetWidth < 800) {
            return '90%';
        }

        return 800;
    }

    ngAfterViewInit() {
        this.myScheduler.ensureAppointmentVisible('id1');
        this.myScheduler.beginAppointmentsUpdate();
        this.myScheduler.setAppointmentProperty('id1', 'resizable', false);
        this.myScheduler.setAppointmentProperty('id2', 'draggable', false);
        this.myScheduler.setAppointmentProperty('id3', 'resizable', false);
        this.myScheduler.setAppointmentProperty('id3', 'draggable', false);
        this.myScheduler.setAppointmentProperty('id4', 'readOnly', true);
        this.myScheduler.setAppointmentProperty('id5', 'hidden', true);
        this.myScheduler.setAppointmentProperty('id6', 'hidden', true);
        this.myScheduler.endAppointmentsUpdate();
    }

    generateAppointments() {
        let appointments = new Array();
        let appointment1 = {
            id: 'id1',
            description: 'George brings projector for presentations.',
            location: '',
            subject: 'Resize is disabled',
            calendar: 'Room 1',
            start: new Date(2018, 10, 23, 9, 0, 0),
            end: new Date(2018, 10, 23, 16, 0, 0)
        }
        let appointment2 = {
            id: 'id2',
            description: '',
            location: '',
            subject: 'Drag is disabled',
            calendar: 'Room 2',
            start: new Date(2018, 10, 24, 10, 0, 0),
            end: new Date(2018, 10, 24, 15, 0, 0)
        }
        let appointment3 = {
            id: 'id3',
            description: '',
            location: '',
            subject: 'Drag and Resize are disabled',
            calendar: 'Room 3',
            start: new Date(2018, 10, 27, 11, 0, 0),
            end: new Date(2018, 10, 27, 13, 0, 0)
        }
        let appointment4 = {
            id: 'id4',
            description: '',
            location: '',
            subject: 'Edit with Dialog is disabled',
            calendar: 'Room 2',
            start: new Date(2018, 10, 23, 16, 0, 0),
            end: new Date(2018, 10, 23, 18, 0, 0)
        }
        let appointment5 = {
            id: 'id5',
            description: '',
            location: '',
            subject: 'Peter',
            calendar: 'Room 1',
            start: new Date(2018, 10, 25, 15, 0, 0),
            end: new Date(2018, 10, 25, 17, 0, 0)
        }
        let appointment6 = {
            id: 'id6',
            description: '',
            location: '',
            subject: 'Nancy',
            calendar: 'Room 4',
            start: new Date(2018, 10, 26, 14, 0, 0),
            end: new Date(2018, 10, 26, 16, 0, 0)
        }
        appointments.push(appointment1);
        appointments.push(appointment2);
        appointments.push(appointment3);
        appointments.push(appointment4);
        appointments.push(appointment5);
        appointments.push(appointment6);

        return appointments;
    };

    date: any = new jqx.date(2018, 11, 23);

    source: any =
        {
            dataType: 'array',
            dataFields: [
                { name: 'id', type: 'string' },
                { name: 'description', type: 'string' },
                { name: 'location', type: 'string' },
                { name: 'subject', type: 'string' },
                { name: 'calendar', type: 'string' },
                { name: 'start', type: 'date' },
                { name: 'end', type: 'date' }
            ],
            id: 'id',
            localData: this.generateAppointments()
        };
    dataAdapter: any = new jqx.dataAdapter(this.source);

    resources: any =
        {
            colorScheme: 'scheme05',
            dataField: 'calendar',
            source: new jqx.dataAdapter(this.source)
        };

    appointmentDataFields: any =
        {
            from: 'start',
            to: 'end',
            id: 'id',
            description: 'description',
            location: 'place',
            subject: 'subject',
            resourceId: 'calendar'
        };

    views: string[] =
        [
            'dayView',
            'weekView',
            'monthView'
        ];

    click(): void {
        this.myScheduler.beginAppointmentsUpdate();
        this.myScheduler.setAppointmentProperty('id5', 'hidden', false);
        this.myScheduler.setAppointmentProperty('id6', 'hidden', false);
        this.myScheduler.endAppointmentsUpdate();
    };
}