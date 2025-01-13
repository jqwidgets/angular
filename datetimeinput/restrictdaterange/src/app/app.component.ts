import { Component } from '@angular/core';

import { jqxDateTimeInputModule, jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
@Component({
    selector: 'app-root',
    imports: [jqxDateTimeInputModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    min: any = new Date(2010, 0, 1);

    max: any = new Date(2020, 11, 31);
}