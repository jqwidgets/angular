﻿import { Component, ViewChild } from '@angular/core';

import { jqxCalendarModule, jqxCalendarComponent } from 'jqwidgets-ng/jqxcalendar';
@Component({
    selector: 'app-root',
    imports: [jqxCalendarModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myCalendar') myCalendar: jqxCalendarComponent;

    availableCultures: string[] =
        [
            'Czech (Czech Republic)', 'German (Germany)', 'English (Canada)', 'English (United States)', 'French (France)',
            'Italian (Italy)', 'Japanese (Japan)', 'Hebrew (Israel)', 'Russian (Russia)', 'Croatian (Croatia)', 'Sanskrit (India)'
        ];

    myDropDownListOnSelect(event: any): void {
        let index = event.args.index;
        switch (index) {
            case 0:
                this.myCalendar.culture('cs-CZ');
                break;
            case 1:
                this.myCalendar.culture('de-DE');
                break;
            case 2:
                this.myCalendar.culture('en-CA');
                break;
            case 3:
                this.myCalendar.culture('en-US');
                break;
            case 4:
                this.myCalendar.culture('fr-FR');
                break;
            case 5:
                this.myCalendar.culture('it-IT');
                break;
            case 6:
                this.myCalendar.culture('ja-JP');
                break;
            case 7:
                this.myCalendar.culture('he-IL');
                break;
            case 8:
                this.myCalendar.culture('ru-RU');
                break;
            case 9:
                this.myCalendar.culture('hr');
                break;
            case 10:
                this.myCalendar.culture('sa-IN');
                break;
        }
    };
}
