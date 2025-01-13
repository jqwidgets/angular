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
            localdata: generatedata(100, false),
            datatype: 'array',
            datafields:
                [
                    { name: 'firstname', type: 'string' },
                    { name: 'lastname', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'available', type: 'bool' },
                    { name: 'date', type: 'date' },
                    { name: 'quantity', type: 'number' },
                    { name: 'price', type: 'number' }
                ]
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
            { text: 'First Name', datafield: 'firstname', width: 130 },
            { text: 'Last Name', datafield: 'lastname', width: 130 },
            { text: 'Product', datafield: 'productname', width: 200 },
            { text: 'Available', datafield: 'available', columntype: 'checkbox', width: 67, cellsalign: 'center', align: 'center' },
            { text: 'Ship Date', datafield: 'date', width: 120, align: 'right', cellsalign: 'right', cellsformat: 'd' },
            { text: 'Quantity', datafield: 'quantity', width: 70, align: 'right', cellsalign: 'right' },
            { text: 'Price', datafield: 'price', cellsalign: 'right', align: 'right', cellsformat: 'c2' }
        ];

    excelBtnOnClick() {
        this.myGrid.exportdata('xls', 'jqxGrid', true, null, true, 'https://jqwidgets.com/export_server/dataexport.php');
    };

    xmlBtnOnClick() {
        this.myGrid.exportdata('xml', 'jqxGrid', true, null, true, 'https://jqwidgets.com/export_server/dataexport.php');
    };

    csvBtnOnClick() {
        this.myGrid.exportdata('csv', 'jqxGrid', true, null, true, 'https://jqwidgets.com/export_server/dataexport.php');
    };

    tsvBtnOnClick() {
        this.myGrid.exportdata('tsv', 'jqxGrid', true, null, true, 'https://jqwidgets.com/export_server/dataexport.php');
    };

    htmlBtnOnClick() {
        this.myGrid.exportdata('html', 'jqxGrid', true, null, true, 'https://jqwidgets.com/export_server/dataexport.php');
    };

    jsonBtnOnClick() {
        this.myGrid.exportdata('json', 'jqxGrid', true, null, true, 'https://jqwidgets.com/export_server/dataexport.php');
    };

    pdfBtnOnClick() {
        this.myGrid.exportdata('pdf', 'jqxGrid', true, null, true, 'https://jqwidgets.com/export_server/dataexport.php');
    };
}
