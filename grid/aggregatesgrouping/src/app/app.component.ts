﻿import { Component } from '@angular/core';

import { generatedata } from '../assets/generatedata';

import { jqxGridModule, jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
@Component({
    selector: 'app-root',
    imports: [jqxGridModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    source: any =
        {
            localdata: generatedata(50, false),
            datafields:
                [
                    { name: 'firstname', type: 'string' },
                    { name: 'lastname', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'date', type: 'date' },
                    { name: 'quantity', type: 'number' },
                    { name: 'price', type: 'number' },
                    { name: 'total', type: 'number' }
                ],
            datatype: 'array',
            updaterow: (rowid: any, rowdata: any): any => {
                // synchronize with the server - send update command   
            }
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
            { text: 'First Name', groupable: true, aggregates: ['count'], datafield: 'firstname', width: 70 },
            { text: 'Last Name', groupable: true, aggregates: ['count'], datafield: 'lastname', width: 70 },
            { text: 'Product', groupable: true, columntype: 'dropdownlist', datafield: 'productname', width: 180 },
            { text: 'Quantity', datafield: 'quantity', aggregates: ['sum'], width: 60, cellsalign: 'right' },
            { text: 'Price', datafield: 'price', aggregates: ['sum'], cellsalign: 'right', width: 60, cellsformat: 'c2' },
            {
                text: 'Total', datafield: 'total', aggregates: ['sum'], cellsalign: 'right', cellsformat: 'c2',
                cellsrenderer: (row, column, value, defaultRender, rowData) => {
                    if (value.toString().indexOf('Sum') >= 0) {
                        return defaultRender.replace('Sum', 'Total');
                    }
                },
                aggregatesrenderer: (aggregates, column, element) => {
                    let renderstring = '<div style="position: relative; margin-top: 4px; margin-right:5px; text-align: right; overflow: hidden;">' + 'Total' + ': ' + aggregates.sum + '</div>';
                    return renderstring;
                }
            }
        ];
}
