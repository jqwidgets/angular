﻿import { Component, ViewChild } from '@angular/core';



import { jqxGridModule, jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
@Component({
    selector: 'app-root',
    imports: [jqxGridModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myGrid') myGrid: jqxGridComponent;

    source: any =
        {
            datatype: 'json',
            url: '../assets/rows_and_columns.txt'
        };

    getWidth(): any {
        if (document.body.offsetWidth < 850) {
            return '90%';
        }

        return 850;
    }

    dataAdapter: any = new jqx.dataAdapter(this.source, {
        autoBind: true,
        downloadComplete: (data: any): void => {
            let columns = data[0].columns;
            let rows = data[1].rows;
            let gridAdapter = new jqx.dataAdapter({
                datafields: [
                    { name: 'id', type: 'number' },
                    { name: 'name', type: 'string' },
                    { name: 'type', type: 'string' },
                    { name: 'calories', type: 'int' },
                    { name: 'totalfat', type: 'string' },
                    { name: 'protein', type: 'string' }
                ],
                id: 'id',
                localdata: rows
            });

            this.myGrid.hideloadelement();
            this.myGrid.beginupdate();
            this.myGrid.setOptions
                ({
                    source: gridAdapter,
                    columns: columns
                });
            this.myGrid.endupdate();
        }
    });
}