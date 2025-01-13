﻿import { Component, ViewChild } from '@angular/core';



import { generateordersdata } from '../assets/generatedata';

import { jqxTreeGridModule, jqxTreeGridComponent } from 'jqwidgets-ng/jqxtreegrid';
@Component({
    selector: 'app-root',
    imports: [jqxTreeGridModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myTreeGrid') myTreeGrid: jqxTreeGridComponent;

    source: any =
        {
            dataType: 'array',
            dataFields: [
                { name: 'name', type: 'string' },
                { name: 'quantity', type: 'number' },
                { name: 'id', type: 'number' },
                { name: 'parentid', type: 'number' },
                { name: 'price', type: 'number' },
                { name: 'date', type: 'date' },
                { name: 'customer', type: 'string' }
            ],
            hierarchy:
            {
                keyDataField: { name: 'id' },
                parentDataField: { name: 'parentid' }
            },
            id: 'id',
            localData: generateordersdata(10)
        };

    getWidth(): any {
        if (document.body.offsetWidth < 850) {
            return '90%';
        }

        return 850;
    }

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns =
        [
            { text: 'Order Name', dataField: 'name', align: 'center', width: 250 },
            { text: 'Customer', dataField: 'customer', align: 'center', width: 250 },
            { text: 'Price', dataField: 'price', cellsFormat: 'c2', align: 'center', cellsAlign: 'right', width: 80 },
            {
                text: 'Order Date', dataField: 'date', align: 'center', cellsFormat: 'dd-MMMM-yyyy hh:mm',
                cellsRenderer: (rowKey: any, column: any, cellValue: any, rowData: any, cellText: any): any => {
                    if (rowData.level === 0) {
                        return this.dataAdapter.formatDate(cellValue, 'dd-MMMM-yyyy');
                    }
                    return cellText;
                }
            }
        ];

    ready = (): void => {
        this.myTreeGrid.expandRow(1);
    };
}