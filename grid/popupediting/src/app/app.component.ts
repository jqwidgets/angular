﻿import { Component, ViewChild } from '@angular/core';


import { jqxInputComponent, jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxNumberInputComponent, jqxNumberInputModule } from 'jqwidgets-ng/jqxnumberinput';
import { jqxWindowComponent, jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { generatedata } from '../assets/generatedata';

import { jqxGridModule, jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { jqxButtonComponent, jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';

@Component({
    selector: 'app-root',
    imports: [jqxGridModule, jqxButtonModule, jqxWindowModule, jqxNumberInputModule, jqxInputModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myGrid') myGrid: jqxGridComponent;
    @ViewChild('myWindow') myWindow: jqxWindowComponent;
    @ViewChild('firstname') firstname: jqxInputComponent;
    @ViewChild('lastname') lastname: jqxInputComponent;
    @ViewChild('product') product: jqxInputComponent;
    @ViewChild('quantity') quantity: jqxNumberInputComponent;
    @ViewChild('price') price: jqxNumberInputComponent;

    editrow: number = -1;
    data = generatedata(200, false);
    source =
        {
            localdata: this.data,
            datatype: 'array',
            datafields:
                [
                    { name: 'firstname', type: 'string' },
                    { name: 'lastname', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'quantity', type: 'number' },
                    { name: 'price', type: 'number' }
                ]
        };
    dataAdapter = new jqx.dataAdapter(this.source);

    getWidth(): any {
        if (document.body.offsetWidth < 850) {
            return '90%';
        }

        return 850;
    }

    columns = [
        { text: 'First Name', datafield: 'firstname', width: 200 },
        { text: 'Last Name', datafield: 'lastname', width: 200 },
        { text: 'Product', datafield: 'productname', width: 190 },
        { text: 'Quantity', datafield: 'quantity', width: 90, cellsalign: 'right' },
        { text: 'Price', datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
        {
            text: 'Edit', datafield: 'Edit', columntype: 'button',
            cellsrenderer: (): string => {
                return 'Edit';
            },
            buttonclick: (row: number): void => {
                //get the data and append in to the inputs
                this.editrow = row;
                let dataRecord = this.myGrid.getrowdata(this.editrow);
                this.firstname.val(dataRecord.firstname);
                this.lastname.val(dataRecord.lastname);
                this.product.val(dataRecord.productname);
                this.quantity.decimal(dataRecord.quantity);
                this.price.decimal(dataRecord.price);
                // show the popup window.
                this.myWindow.position({ x: 68, y: 368 });
                this.myWindow.open();
            }
        }
    ];

    saveBtn(): void {
        if (this.editrow >= 0) {
            let row =
            {
                firstname: this.firstname.val(),
                lastname: this.lastname.val(),
                productname: this.product.val(),
                quantity: parseInt(this.quantity.decimal()),
                price: parseFloat(this.price.decimal())
            };
            let rowID = this.myGrid.getrowid(this.editrow);
            this.myGrid.updaterow(rowID, row);
            this.myWindow.hide();
        }
    }

    cancelBtn(): void {
        this.myWindow.hide();
    }
}