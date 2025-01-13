import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxLinearGaugeModule, jqxLinearGaugeComponent } from 'jqwidgets-ng/jqxlineargauge';
import { jqxGaugeModule, jqxGaugeComponent } from 'jqwidgets-ng/jqxgauge';
import { jqxCheckBoxComponent, jqxCheckBoxModule } from 'jqwidgets-ng/jqxcheckbox';
import { jqxExpanderComponent, jqxExpanderModule } from 'jqwidgets-ng/jqxexpander';
import { jqxButtonComponent, jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxRadioButtonComponent, jqxRadioButtonModule } from 'jqwidgets-ng/jqxradiobutton';

@Component({
    selector: 'app-root',
    imports: [jqxLinearGaugeModule, jqxButtonModule, jqxRadioButtonModule, jqxGaugeModule, jqxExpanderModule, jqxCheckBoxModule],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('myGauge') myGauge: jqxGaugeComponent;

    ngAfterViewInit(): void {
        this.myGauge.value(220);
    }

    ticksMinor: any = { interval: 5, size: '5%' };

    ticksMajor: any = { interval: 10, size: '10%' };

    labels: any = { visible: true, position: 'inside' };

    style: any = { stroke: '#ffffff', 'stroke-width': '1px', fill: '#ffffff' };

    caption: any = { offset: [0, -25], value: 'jQWidgets', position: 'bottom' };

    ranges: any[] =
        [
            { startValue: 0, endValue: 90, style: { fill: '#e2e2e2', stroke: '#e2e2e2' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 },
            { startValue: 90, endValue: 140, style: { fill: '#f6de54', stroke: '#f6de54' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 },
            { startValue: 140, endValue: 180, style: { fill: '#db5016', stroke: '#db5016' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 },
            { startValue: 180, endValue: 220, style: { fill: '#d02841', stroke: '#d02841' }, startDistance: '5%', endDistance: '5%', endWidth: 13, startWidth: 13 }
        ];

    showLabelsCheckboxOnChange(event: any): void {
        this.labels.visible = event.args.checked;
        this.myGauge.labels(this.labels);
    };

    showRangesCheckboxOnChange(event: any): void {
        this.myGauge.showRanges(event.args.checked);
    };

    showBorderCheckboxOnChange(event: any): void {
        this.myGauge.border({ visible: event.args.checked });
    };

    insideRadioOnChange(event: any): void {
        if (event.args.checked) {
            this.labels.position = 'inside';
            this.myGauge.labels(this.labels);
        }
    };

    outsideRadioOnChange(event: any): void {
        if (event.args.checked) {
            this.labels.position = 'outside';
            this.myGauge.labels(this.labels);
        }
    };
}