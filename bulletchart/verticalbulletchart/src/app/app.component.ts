﻿
import { Component, ViewChild } from '@angular/core';

import { jqxBulletChartComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbulletchart.ts';


import { jqxGridModule, jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
@Component({
    selector: 'app-root',
    imports: [jqxGridModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {

    ranges: any[] =
        [
            { startValue: 0, endValue: 200, color: '#000000', opacity: 0.5 },
            { startValue: 200, endValue: 250, color: '#000000', opacity: 0.3 },
            { startValue: 250, endValue: 300, color: '#000000', opacity: 0.1 }
        ];

    pointer: any = { value: 270, label: 'Revenue 2025 YTD', size: '25%', color: 'Black' };

    target: any = { value: 260, label: 'Revenue 2024 YTD', size: 4, color: 'Black' };

    ticks: any = { position: 'both', interval: 50, size: 10 };
}
