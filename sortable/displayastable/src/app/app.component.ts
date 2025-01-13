import { Component, ViewEncapsulation } from '@angular/core';

import { jqxSortableModule, jqxSortableComponent } from 'jqwidgets-ng/jqxsortable';
@Component({
    selector: 'app-root',
    imports: [jqxSortableModule],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
}