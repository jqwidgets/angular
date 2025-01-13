﻿import { Component, ViewChild } from '@angular/core';


import { jqxTabsModule, jqxTabsComponent } from 'jqwidgets-ng/jqxtabs';
@Component({
    selector: 'app-root',
    imports: [jqxTabsModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('jqxTabs') jqxTabs: jqxTabsComponent;

    height: number = 25;
    width: number = 100;

    checkedRight(event: any): void {
        this.jqxTabs.scrollPosition('right');
    };

    checkedBoth(event: any): void {
        this.jqxTabs.scrollPosition('both');
    };

    checkedLeft(event: any): void {
        this.jqxTabs.scrollPosition('left');
    };
}