﻿import { Component, ViewChild } from '@angular/core';

import { jqxChartComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart.ts';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myChart') myChart: jqxChartComponent;

    sampleData: any[] = [
        { Day: 'Monday', Running: 30, Swimming: 0, Cycling: 25, Goal: 40 },
        { Day: 'Tuesday', Running: 25, Swimming: 25, Cycling: 0, Goal: 50 },
        { Day: 'Wednesday', Running: 30, Swimming: 0, Cycling: 25, Goal: 60 },
        { Day: 'Thursday', Running: 20, Swimming: 20, Cycling: 25, Goal: 40 },
        { Day: 'Friday', Running: 0, Swimming: 20, Cycling: 25, Goal: 50 },
        { Day: 'Saturday', Running: 30, Swimming: 0, Cycling: 30, Goal: 60 },
        { Day: 'Sunday', Running: 20, Swimming: 40, Cycling: 0, Goal: 90 }
    ];

    padding: any = { left: 5, top: 5, right: 5, bottom: 5 };

    titlePadding: any = { left: 90, top: 0, right: 0, bottom: 10 };

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}
	
    xAxis: any =
    {
        dataField: 'Day',
        unitInterval: 1
    };

    valueAxis: any =
    {
        minValue: 0,
        maxValue: 100,
        unitInterval: 10,
        title: { text: 'Time in minutes' },
        labels: {
            horizontalAlignment: 'right'
        }
    };

    seriesGroups: any[] =
    [
        {
            type: 'stackedcolumn',
            columnsGapPercent: 50,
            seriesGapPercent: 5,
            series: [
                { dataField: 'Running', displayText: 'Running' },
                { dataField: 'Swimming', displayText: 'Swimming' },
                { dataField: 'Cycling', displayText: 'Cycling' }
            ]
        }
    ];

    flipValueAxisOnChange(event: any): void {
        this.myChart.valueAxis().flip = event.args.checked;
        this.myChart.refresh();
    };
    flipXAxisOnChange(event: any): void {
        this.myChart.xAxis().flip = event.args.checked;
        this.myChart.refresh();
    };
}
