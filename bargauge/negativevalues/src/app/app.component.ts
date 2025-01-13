import { Component } from '@angular/core';

import { jqxBarGaugeModule, jqxBarGaugeComponent } from 'jqwidgets-ng/jqxbargauge';
import { jqxSliderModule, jqxSliderComponent } from 'jqwidgets-ng/jqxslider';

@Component({
    selector: 'app-root',
    imports: [jqxSliderModule, jqxBarGaugeModule],
    standalone: true,
    templateUrl: './app.component.html'
})


export class AppComponent {
    values: number[] = [12, -35, -14.78, 29.5, 23.124, 41];

    labels: any = {
        formatFunction: (value: string) => {
            return value + ' m';
        },
        precision: 1,
        indent: 15
    }
}