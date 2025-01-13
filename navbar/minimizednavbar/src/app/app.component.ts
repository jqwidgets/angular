import { Component, ViewEncapsulation } from '@angular/core';

import { jqxNavBarModule, jqxNavBarComponent } from 'jqwidgets-ng/jqxnavbar';
@Component({
    selector: 'app-root',
    imports: [jqxNavBarModule],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
}