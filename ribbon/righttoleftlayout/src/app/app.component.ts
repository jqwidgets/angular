import { Component, ViewEncapsulation } from '@angular/core';

import { jqxRibbonModule, jqxRibbonComponent } from 'jqwidgets-ng/jqxribbon';
@Component({
    selector: 'app-root',
    imports: [jqxRibbonModule],
    standalone: true,
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
}