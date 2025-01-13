import { Component } from '@angular/core';

import { jqxCalendarModule, jqxCalendarComponent } from 'jqwidgets-ng/jqxcalendar';
@Component({
    selector: 'app-root',
    imports: [jqxCalendarModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {

}
