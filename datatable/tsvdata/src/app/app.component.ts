﻿import { Component } from '@angular/core';

import { jqxDataTableModule, jqxDataTableComponent } from 'jqwidgets-ng/jqxdatatable';
@Component({
    selector: 'app-root',
    imports: [jqxDataTableModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    source: any =
        {
            datatype: 'tab',
            datafields: [
                { name: 'Year', type: 'int' },
                { name: 'HPI', type: 'float' },
                { name: 'BuildCost', type: 'float' },
                { name: 'Population', type: 'float' },
                { name: 'Rate', type: 'float' }
            ],
            url: '../assets/homeprices.txt'
        };

    getWidth(): any {
        if (document.body.offsetWidth < 850) {
            return '90%';
        }

        return 850;
    }

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] =
        [
            { text: 'Year', dataField: 'Year', width: 200 },
            { text: 'HPI', dataField: 'HPI', cellsFormat: 'f2', width: 200 },
            { text: 'Build Cost', dataField: 'BuildCost', cellsFormat: 'f2', width: 180 },
            { text: 'Population', dataField: 'Population', cellsFormat: 'f2', width: 100 },
            { text: 'Rate', dataField: 'Rate', cellsFormat: 'f5' }
        ];
}