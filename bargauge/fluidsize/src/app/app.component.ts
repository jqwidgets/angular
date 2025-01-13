import { Component, ViewEncapsulation } from '@angular/core';

import { jqxBarGaugeModule, jqxBarGaugeComponent } from 'jqwidgets-ng/jqxbargauge';
import { jqxSliderModule, jqxSliderComponent } from 'jqwidgets-ng/jqxslider';

@Component({
    selector: 'app-root',
    imports: [jqxSliderModule, jqxBarGaugeModule],
    standalone: true,
    templateUrl: './app.component.html'
})


export class AppComponent {
    values: number[] = [32, 11, 100, 49, 69, 20]
}