﻿import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { jqxPanelComponent, jqxPanelModule } from 'jqwidgets-ng/jqxpanel';

import { jqxRibbonModule, jqxRibbonComponent } from 'jqwidgets-ng/jqxribbon';
@Component({
    selector: 'app-root',
    imports: [jqxRibbonModule, jqxPanelModule],
    standalone: true,
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('log') log: jqxPanelComponent;

    select(event: any): void {
        let args = event.args;
        let selectedIndex = event.args.selectedIndex;
        this.log.prepend('<div style="margin-top: 5px;">Selected: ' + selectedIndex + '</div>');
    };

    unselect(event: any): void {
        let args = event.args;
        let unselectedIndex = event.args.unselectedIndex;
        this.log.prepend('<div style="margin-top: 5px;">Unselected: ' + unselectedIndex + '</div>');
    };
}