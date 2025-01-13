﻿import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxSliderComponent, jqxSliderModule } from 'jqwidgets-ng/jqxslider';

import { jqxLinearGaugeModule, jqxLinearGaugeComponent } from 'jqwidgets-ng/jqxlineargauge';
import { jqxGaugeModule, jqxGaugeComponent } from 'jqwidgets-ng/jqxgauge';
@Component({
    selector: 'app-root',
    imports: [jqxLinearGaugeModule, jqxSliderModule, jqxGaugeModule],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('myGauge') myGauge: jqxGaugeComponent;
    @ViewChild('mySlider') mySlider: jqxSliderComponent;

    ngAfterViewInit(): void {
        this.myGauge.value(120);
    }

    labels: any = { position: 'outside', interval: 20 };

    ticksMinor: any = { interval: 5, size: '5%' };

    ticksMajor: any = { interval: 20, size: '10%' };

    cap: any = { size: '5%', style: { fill: '#2e79bb', stroke: '#2e79bb' } };

    border: any = { style: { fill: '#8e9495', stroke: '#7b8384', 'stroke-width': 1 } };

    pointer: any = { style: { fill: '#2e79bb' }, width: 5 };

    ranges: any[] =
        [
            { startValue: 0, endValue: 130, style: { fill: '#4cb848', stroke: '#4cb848' }, startDistance: 0, endDistance: 0 },
            { startValue: 130, endValue: 180, style: { fill: '#fad00b', stroke: '#fad00b' }, startDistance: 0, endDistance: 0 },
            { startValue: 180, endValue: 220, style: { fill: '#e53d37', stroke: '#e53d37' }, startDistance: 0, endDistance: 0 }
        ];

    mySliderOnChange(): void {
        let val = this.mySlider.value();
        this.myGauge.value(val);
    }
}