import { Component, ViewEncapsulation } from '@angular/core';

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
    players: number[] = [25, 46, 6, 55, 14, 22, 57, 40, 87, 20];

    title: any = { text: 'Ranking', subtitle: '(boundary - 33 points)' };

    labels: any = {
        formatFunction: (value: string) => {
            let realVal = parseInt(value);
            return realVal + ' pts';
        },
        font: { size: 12 },
        indent: 10
    }

    tooltip: any = {
        classname: 'myTooltip',
        formatFunction: (value: string) => {
            let realVal = parseInt(value);
            let player = this.players.indexOf(realVal) + 1;
            return ('Player ' + player + ': ' + realVal + ' points');
        },
        visible: true
    }
}