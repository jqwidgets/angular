import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { jqxSliderModule, jqxSliderComponent } from 'jqwidgets-ng/jqxslider';
@Component({
    selector: 'app-root',
    imports: [jqxSliderModule],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {

}