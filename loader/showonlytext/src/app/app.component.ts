﻿import { Component, ViewChild } from '@angular/core';

import { jqxLoaderComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxloader.ts';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('jqxLoader') jqxLoader: jqxLoaderComponent;

    openLoaderClick(event: any): void {
        this.jqxLoader.open();
    };

    closeLoaderClick(event: any): void {
        this.jqxLoader.close();
    };
}