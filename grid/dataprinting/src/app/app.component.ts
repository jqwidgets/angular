﻿import { Component, ViewChild } from '@angular/core';

import { jqxButtonComponent, jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { generatedata } from '../assets/generatedata';
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
            localdata: generatedata(10),
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
            { text: 'First Name', datafield: 'firstname', width: 120 },
            { text: 'Last Name', datafield: 'lastname', width: 120 },
            { text: 'Product', datafield: 'productname', width: 177 },
            { text: 'Available', datafield: 'available', columntype: 'checkbox', width: 67, cellsalign: 'center', align: 'center' },
            { text: 'Ship Date', datafield: 'date', width: 120, align: 'right', cellsalign: 'right', cellsformat: 'd' },
            { text: 'Quantity', datafield: 'quantity', width: 70, align: 'right', cellsalign: 'right' },
            { text: 'Price', datafield: 'price', cellsalign: 'right', align: 'right', cellsformat: 'c2' }
        ];

    btnOnClick() {
        let gridContent = this.myGrid.exportdata('html');
        let newWindow = window.open('', '', 'width=800, height=500'),
            document = newWindow.document.open(),
            pageContent =
                '<!DOCTYPE html>\n' +
                '<html>\n' +
                '<head>\n' +
                '<meta charset="utf-8" />\n' +
                '<title>jQWidgets Grid</title>\n' +
                '</head>\n' +
                '<body>\n' + gridContent + '\n</body>\n</html>';
        document.write(pageContent);
        document.close();
        newWindow.print();
    };
}