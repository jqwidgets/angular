import { Component, ViewEncapsulation } from '@angular/core';

import { jqxTooltipModule, jqxTooltipComponent } from 'jqwidgets-ng/jqxtooltip';
@Component({
    selector: 'app-root',
    imports: [jqxTooltipModule],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
}