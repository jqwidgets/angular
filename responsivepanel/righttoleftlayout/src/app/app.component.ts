import { Component, ViewEncapsulation } from '@angular/core';

import { jqxResponsivePanelModule, jqxResponsivePanelComponent } from 'jqwidgets-ng/jqxresponsivepanel';
@Component({
    selector: 'app-root',
    imports: [jqxResponsivePanelModule],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {

}