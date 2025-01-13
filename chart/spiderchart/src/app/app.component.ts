﻿import { Component, ViewChild, OnInit } from '@angular/core';

import { jqxCheckBoxComponent, jqxCheckBoxModule } from 'jqwidgets-ng/jqxcheckbox';
import { jqxChartModule, jqxChartComponent } from 'jqwidgets-ng/jqxchart';

@Component({
    selector: 'app-root',
    imports: [jqxChartModule, jqxCheckBoxModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
    @ViewChild('myChart') myChart: jqxChartComponent;

    chartInstance;

    ngOnInit(): void {
        this.chartInstance = this.myChart
    }

    getWidth(): any {
        if (document.body.offsetWidth < 850) {
            return '90%';
        }

        return 850;
    }

    data: any[] = [
        {
            type: 'Organic Search',
            month1: 1725090,
            month2: 3136190
        },
        {
            type: 'Paid Search',
            month1: 925090,
            month2: 2136190
        },
        {
            type: 'Direct',
            month1: 425090,
            month2: 936190
        },
        {
            type: 'Referral',
            month1: 1250900,
            month2: 2536190
        },
        {
            type: 'Twitter',
            month1: 350900,
            month2: 681900
        },
        {
            type: 'Facebook',
            month1: 381900,
            month2: 831500
        }
    ];

    padding: any = { left: 5, top: 5, right: 5, bottom: 5 };

    titlePadding: any = { left: 0, top: 0, right: 0, bottom: 5 };

    xAxis: any =
        {
            dataField: 'type',
            displayText: 'Traffic source',
            valuesOnTicks: true,
            labels: { autoRotate: false }
        };

    valueAxis: any =
        {
            unitInterval: 1000000,
            labels: {
                formatSettings: { decimalPlaces: 0 },
                formatFunction: (value: any, itemIndex: any, serieIndex: any, groupIndex: any): string => {
                    return Math.round(value / 1000) + ' K';
                }
            }
        };

    seriesGroups: any =
        [
            {
                spider: true,
                startAngle: 0,
                endAngle: 360,
                radius: 120,
                type: 'spline',
                series: [
                    { dataField: 'month1', displayText: 'January 2014', opacity: 0.7, radius: 2, lineWidth: 2, symbolType: 'circle' },
                    { dataField: 'month2', displayText: 'February 2014', opacity: 0.7, radius: 2, lineWidth: 2, symbolType: 'square' }
                ]
            }
        ];

    colorsSchemesList: string[] = ['scheme01', 'scheme02', 'scheme03', 'scheme04', 'scheme05', 'scheme06', 'scheme07', 'scheme08'];

    seriesList: string[] = ['splinearea', 'spline', 'column', 'scatter', 'stackedcolumn', 'stackedsplinearea', 'stackedspline'];

    sliderStartAngle(event: any): void {
        let value = event.args.value;
        this.chartInstance.seriesGroups()[0].startAngle = value;
        this.chartInstance.seriesGroups()[0].endAngle = value + 360;
        this.chartInstance.update();
    }

    sliderRadius(event: any): void {
        let value = event.args.value;
        this.chartInstance.seriesGroups()[0].radius = value;
        this.chartInstance.update();
    }

    dropDownListColor(event: any) {
        let value = event.args.item.value;
        this.myChart.colorScheme(value);
    };

    dropDownListSeries(event: any) {
        let value = event.args.item.value;
        this.chartInstance.seriesGroups()[0].type = value;
        this.myChart.update();
    };

    checkBoxTicksBetween(event: any): void {
        this.chartInstance.xAxis().valuesOnTicks = !event.args.checked;
        this.chartInstance.update();
    }

    checkBoxAutoRotate(event: any): void {
        this.chartInstance.xAxis().labels.autoRotate = event.args.checked;
        this.chartInstance.valueAxis().labels.autoRotate = event.args.checked;
        this.chartInstance.update();
    }
}