import { Component, ViewEncapsulation } from '@angular/core';

import { jqxNavigationBarModule, jqxNavigationBarComponent } from 'jqwidgets-ng/jqxnavigationbar';
@Component({
    selector: 'app-root',
    imports: [jqxNavigationBarModule],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
}