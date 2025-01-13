import { Component } from '@angular/core';

import { jqxNavBarModule, jqxNavBarComponent } from 'jqwidgets-ng/jqxnavbar';
@Component({
    selector: 'app-root',
    imports: [jqxNavBarModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
}