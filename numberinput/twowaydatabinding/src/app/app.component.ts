import { Component } from '@angular/core';

import { jqxNumberInputModule, jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';
@Component({
    selector: 'app-root',
    imports: [jqxNumberInputModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    value: string;
}