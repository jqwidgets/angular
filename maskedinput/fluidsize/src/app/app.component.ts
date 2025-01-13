import { Component } from '@angular/core';

import { jqxMaskedInputModule, jqxMaskedInputComponent } from 'jqwidgets-ng/jqxmaskedinput';
@Component({
    selector: 'app-root',
    imports: [jqxMaskedInputModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
}