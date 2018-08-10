import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxSliderComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxslider.ts';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('jqxSlider') jqxSlider: jqxSliderComponent

    ngAfterViewInit() {
        this.jqxSlider.focus();
    }
}