import { Component } from '@angular/core';

import { jqxCheckBoxModule, jqxCheckBoxComponent } from 'jqwidgets-ng/jqxcheckbox';
@Component({
    selector: 'app-root',
    imports: [jqxCheckBoxModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    state: boolean = true;
}
