﻿
import { Component } from '@angular/core';

import { jqxBulletChartModule, jqxBulletChartComponent } from 'jqwidgets-ng/jqxbulletchart';
@Component({
    selector: 'app-root',
    imports: [jqxBulletChartModule],
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

    ticks: any = { position: 'far', interval: 50, size: 10 };
}
