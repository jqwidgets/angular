﻿import { Component, ViewChild } from '@angular/core';

import { generatedata } from '../assets/generatedata';
import { jqxButtonComponent, jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';

import { jqxGridModule, jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
    selector: 'app-root',
    imports: [jqxGridModule, jqxButtonModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myGrid') myGrid: jqxGridComponent;

    source: any =
        {
            localdata: generatedata(500, false),
            datafields:
                [
                    { name: 'name', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'available', type: 'bool' },
                    { name: 'date', type: 'date' },
                    { name: 'range', map: 'date', type: 'date' },
                    { name: 'quantity', type: 'number' }
                ],
            datatype: 'array'
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
            { text: 'Name', columntype: 'textbox', filtercondition: 'starts_with', datafield: 'name', width: '30%' },
            { text: 'Range', datafield: 'range', filtertype: 'range', cellsalign: 'right', width: '35%', cellsformat: 'd' },
            { text: 'Date', datafield: 'date', filtertype: 'date', cellsalign: 'right', width: '35%', cellsformat: 'd' }
        ];

    btnOnClick() {
        this.myGrid.clearfilters();
    };
}