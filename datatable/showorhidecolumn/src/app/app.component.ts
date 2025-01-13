﻿import { Component, ViewChild } from '@angular/core';


import { jqxDataTableModule, jqxDataTableComponent } from 'jqwidgets-ng/jqxdatatable';
@Component({
    selector: 'app-root',
    imports: [jqxDataTableModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myDataTable') myDataTable: jqxDataTableComponent;

    source: any =
        {
            dataType: 'json',
            dataFields: [
                { name: 'name' },
                { name: 'type' },
                { name: 'calories', type: 'int' },
                { name: 'totalfat' },
                { name: 'protein' }
            ],
            id: 'id',
            url: '../assets/beverages.txt'
        };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] =
        [
            { text: 'Name', datafield: 'name', width: 200 },
            { text: 'Beverage Type', dataField: 'type', width: 200 },
            { text: 'Calories', dataField: 'calories', width: 200 }
        ];

    listSource: any[] =
        [
            { label: 'Beverage Type', value: 'type', checked: true },
            { label: 'Calories', value: 'calories', checked: true }
        ];

    listBoxOnCheckChange(event: any): void {
        this.myDataTable.beginUpdate();
        if (event.args.checked) {
            this.myDataTable.showColumn(event.args.value);
        }
        else {
            this.myDataTable.hideColumn(event.args.value);
        }
        this.myDataTable.endUpdate();
    }
}