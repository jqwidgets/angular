﻿import { Component } from '@angular/core';

import { jqxHeatMapModule, jqxHeatMapComponent } from 'jqwidgets-ng/jqxheatmap';
@Component({
    selector: 'app-root',
    imports: [jqxHeatMapModule],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    xAxis: object = {
        labels: ['John', 'Marry', 'Alba', 'Steven', 'Josh', 'Alica', 'Robert', 'Kim', 'Ann', 'Paul', 'Regina', 'Dorothy']
    };
    yAxis: object = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
    };
    data: number[][] = [
        [89, 39, 94, 55, 3],
        [53, 38, 26, 68, 33],
        [22, 0, 66, 90, 78],
        [97, 68, 68, 3, 99],
        [47, 47, 88, 6, 1],
        [73, 23, 3, 79, 100],
        [21, 86, 13, 33, 0],
        [53, 81, 95, 79, 66],
        [74, 68, 88, 51, 43],
        [10, 12, 78, 14, 21],
        [55, 58, 12, 82, 99],
        [88, 23, 86, 59, 53],
    ];
    tooltipRender = (args): void => {
        args.content = '<div>On ' + args.yLabel + ', <span style="color:yellow;">' + args.xLabel + '</span> has made <strong>' + args.value + ' 000$</strong></div>'
    }
}
