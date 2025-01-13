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
            localdata: generatedata(200, false),
            datafields:
                [
                    { name: 'id', type: 'number' },
                    { name: 'firstname', type: 'string' },
                    { name: 'lastname', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'available', type: 'bool' },
                    { name: 'quantity', type: 'number' },
                    { name: 'price', type: 'number' },
                    { name: 'total', type: 'number' }
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
            { text: 'First Name', datafield: 'firstname', width: 200, cellsalign: 'center', align: 'center' },
            { text: 'Last Name', datafield: 'lastname', width: 200, cellsalign: 'center', align: 'center' },
            { text: 'Product', datafield: 'productname', width: 180, cellsalign: 'center', align: 'center' },
            { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'center', align: 'center' },
            { text: 'Unit Price', datafield: 'price', width: 90, cellsalign: 'center', align: 'center', cellsformat: 'c2' },
            { text: 'Total', datafield: 'total', cellsalign: 'center', align: 'center', cellsformat: 'c2' }
        ];

    setAlignment(align: string): void {
        this.myGrid.beginupdate();
        for (let index = 0; index < this.columns.length; index++) {
            this.myGrid.setcolumnproperty(this.columns[index].datafield, 'align', align);
            this.myGrid.setcolumnproperty(this.columns[index].datafield, 'cellsalign', align);
        }
        this.myGrid.endupdate();
    }

    leftBtnOnChecked(): void {
        this.setAlignment('left');
    };

    centerBtnOnChecked(): void {
        this.setAlignment('center');
    };

    rightBtnOnChecked(): void {
        this.setAlignment('right');
    };
}