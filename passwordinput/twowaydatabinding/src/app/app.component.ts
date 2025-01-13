import { Component } from '@angular/core';

import { jqxPasswordInputModule, jqxPasswordInputComponent } from 'jqwidgets-ng/jqxpasswordinput';
@Component({
    selector: 'app-root',
    imports: [jqxPasswordInputModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    value: string;
}