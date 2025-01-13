import { Component } from '@angular/core';

import { jqxTimePickerModule, jqxTimePickerComponent } from 'jqwidgets-ng/jqxtimepicker';
@Component({
    selector: 'app-root',
    imports: [jqxTimePickerModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    autoSwitchToMinutes: boolean = true;
}