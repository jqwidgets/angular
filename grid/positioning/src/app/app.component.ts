﻿import { Component, ViewChild } from '@angular/core';



import { generatedata } from '../assets/generatedata';
import { jqxRadioButtonComponent, jqxRadioButtonModule } from 'jqwidgets-ng/jqxradiobutton';

import { jqxGridModule, jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
@Component({
    selector: 'app-root',
    imports: [jqxGridModule, jqxRadioButtonModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myGrid') myGrid: jqxGridComponent;

    source: any =
        {
            localdata: generatedata(20, false),
            datafields:
                [
                    { name: 'name', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'available', type: 'bool' },
                    { name: 'date', type: 'date' },
                    { name: 'quantity', type: 'number' }
                ],
            datatype: 'array'
        }

    getWidth(): any {
        if (document.body.offsetWidth < 850) {
            return '90%';
        }

        return 850;
    }

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] =
        [
            { text: 'Name', columntype: 'textbox', filtertype: 'input', datafield: 'name', width: 215 },
            { text: 'Product', filtertype: 'checkedlist', datafield: 'productname', width: 220 },
            { text: 'Ship Date', datafield: 'date', filtertype: 'range', width: 210, cellsalign: 'right', cellsformat: 'd' },
            { text: 'Qty.', datafield: 'quantity', filtertype: 'number', cellsalign: 'right' }
        ];

    topBtnOnChecked(): void {
        this.myGrid.everpresentrowposition('top');
    }

    topAboveFilterRowBtnOnChecked(): void {
        this.myGrid.everpresentrowposition('topAboveFilterRow');
    }

    bottomBtnOnChecked(): void {
        this.myGrid.everpresentrowposition('bottom');
    }
}