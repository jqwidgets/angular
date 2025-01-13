import { Component } from '@angular/core';

import { jqxFormattedInputModule, jqxFormattedInputComponent } from 'jqwidgets-ng/jqxformattedinput';
@Component({
    selector: 'app-root',
    imports: [jqxFormattedInputModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {

}