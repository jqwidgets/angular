﻿import { Component } from '@angular/core';

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
            datatype: 'json',
            datafields: [
                { name: 'name', type: 'string' },
                { name: 'type', type: 'string' },
                { name: 'calories', type: 'int' },
                { name: 'totalfat', type: 'string' },
                { name: 'protein', type: 'string' }
            ],
            id: 'id',
            url: '../assets/beverages.txt'
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
            { text: 'Name', datafield: 'name', width: 250 },
            { text: 'Beverage Type', datafield: 'type', width: 250 },
            { text: 'Calories', datafield: 'calories', width: 180 },
            { text: 'Total Fat', datafield: 'totalfat', width: 120 },
            { text: 'Protein', datafield: 'protein', minwidth: 120 }
        ];
}
