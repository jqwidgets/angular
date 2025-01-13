import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { jqxListMenuModule, jqxListMenuComponent } from 'jqwidgets-ng/jqxlistmenu';
@Component({
    selector: 'app-root',
    imports: [jqxListMenuModule],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
}