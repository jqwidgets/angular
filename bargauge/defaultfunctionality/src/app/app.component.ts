import { Component } from '@angular/core';

import { jqxBarGaugeModule, jqxBarGaugeComponent } from 'jqwidgets-ng/jqxbargauge';
import { jqxSliderModule, jqxSliderComponent } from 'jqwidgets-ng/jqxslider';

@Component({
    selector: 'app-root',
    imports: [jqxSliderModule, jqxBarGaugeModule],
    standalone: true,
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html'
})


export class AppComponent {
    tooltip: any =
        {
            visible: true,
            formatFunction: (value: string) => {
                let realVal = parseInt(value);
                return ('Year: 2025<br/>Price Index:' + realVal);
            }
        }

    values: number[] = [102, 115, 130, 137];
}