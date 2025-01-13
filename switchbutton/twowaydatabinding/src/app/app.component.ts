import { Component, ViewChild } from '@angular/core';

import { jqxSwitchButtonModule, jqxSwitchButtonComponent } from 'jqwidgets-ng/jqxgrid';
@Component({
    selector: 'app-root',
    imports: [jqxSwitchButtonModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    value: boolean = false;
}
