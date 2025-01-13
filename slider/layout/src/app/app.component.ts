import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxSliderModule, jqxSliderComponent } from 'jqwidgets-ng/jqxslider';
@Component({
    selector: 'app-root',
    imports: [jqxSliderModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
}