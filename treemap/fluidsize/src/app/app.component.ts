﻿import { Component, ViewEncapsulation } from '@angular/core';

import { jqxTreeMapModule, jqxTreeMapComponent } from 'jqwidgets-ng/jqxtreemap';
@Component({
    selector: 'app-root',
    imports: [jqxTreeMapModule],
    standalone: true,
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    data: any[] = [
        {
            label: 'USA',
            value: 104
        },
        {
            label: 'People\'s Republic of China',
            value: 88
        },
        {
            label: 'Great Britain',
            value: 65
        },
        {
            label: 'Russian Federation',
            value: 82
        },
        {
            label: 'Germany',
            value: 44
        },
        {
            label: 'Republic of Korea',
            value: 28
        },
        {
            label: 'France',
            value: 34
        },
        {
            label: 'Italy',
            value: 28
        },
        {
            label: 'Hungary',
            value: 17
        },
        {
            label: 'Australia',
            value: 35
        },
        {
            label: 'Japan',
            value: 38
        },
        {
            label: 'Kazakhstan',
            value: 13
        },
        {
            label: 'Netherlands',
            value: 20
        },
        {
            label: 'Ukraine',
            value: 20
        },
        {
            label: 'New Zealand',
            value: 13
        },
        {
            label: 'Cuba',
            value: 14
        }
    ];

    legendScaleCallback(v: number): string {
        return v.toFixed(1);
    }
}