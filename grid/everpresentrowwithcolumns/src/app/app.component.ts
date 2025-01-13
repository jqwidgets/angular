﻿import { Component } from '@angular/core';

import { generatedata } from '../assets/generatedata';

import { jqxGridModule, jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { jqxRadioButtonComponent, jqxRadioButtonModule } from 'jqwidgets-ng/jqxradiobutton';

@Component({
    selector: 'app-root',
    imports: [jqxGridModule, jqxRadioButtonModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    source: any =
        {
            localdata: generatedata(10, false),
            datafields:
                [
                    { name: 'name', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'available', type: 'bool' },
                    { name: 'date', type: 'date' },
                    { name: 'quantity', type: 'number' }
                ],
            datatype: 'array'
        };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    getWidth(): any {
        if (document.body.offsetWidth < 850) {
            return '90%';
        }

        return 850;
    }

    columns: any[] =
        [
            { text: 'Name', columntype: 'textbox', filtertype: 'input', datafield: 'name', width: 215 },
            { text: 'Product', filtertype: 'checkedlist', datafield: 'productname', width: 220 },
            { text: 'Ship Date', datafield: 'date', filtertype: 'range', width: 210, cellsalign: 'right', cellsformat: 'd' },
            { text: 'Qty.', datafield: 'quantity', filtertype: 'number', cellsalign: 'right' },
            { text: '', datafield: 'addButtonColumn', width: 50 },
            { text: '', datafield: 'resetButtonColumn', width: 50 }
        ];
}