﻿import { Component, ViewChild, ViewEncapsulation, AfterViewInit } from '@angular/core';



import { jqxRibbonModule, jqxRibbonComponent } from 'jqwidgets-ng/jqxribbon';
@Component({
    selector: 'app-root',
    imports: [jqxRibbonModule],
    standalone: true,
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit {
    @ViewChild('jqxRibbon') jqxRibbon: jqxRibbonComponent;

    ngAfterViewInit() {
        this.jqxRibbon.setPopupLayout(0, "near", 130, 205);
        this.jqxRibbon.setPopupLayout(1, "center", 130, 200);
        this.jqxRibbon.setPopupLayout(2, "center", 130, 260);
        this.jqxRibbon.setPopupLayout(3, "far", 130, 350);
    }
}