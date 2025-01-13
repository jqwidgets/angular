﻿import { Component, ViewChild, ViewEncapsulation } from '@angular/core';



import { jqxTreeGridModule, jqxTreeGridComponent } from 'jqwidgets-ng/jqxtreegrid';
@Component({
    selector: 'app-root',
    imports: [jqxTreeGridModule],
    standalone: true,
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('TreeGrid') treeGrid: jqxTreeGridComponent

    getWidth(): any {
        if (document.body.offsetWidth < 850) {
            return '90%';
        }

        return 850;
    }

    source: any =
        {
            dataType: 'tab',
            dataFields: [
                { name: 'Id', type: 'number' },
                { name: 'Name', type: 'string' },
                { name: 'ParentID', type: 'number' },
                { name: 'Population', type: 'number' }
            ],
            hierarchy:
            {
                keyDataField: { name: 'Id' },
                parentDataField: { name: 'ParentID' }
            },
            id: 'Id',
            url: '../assets/locations.txt'
        };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    ready(): void {
        this.treeGrid.expandRow(34);
    };

    columns: any[] = [
        { text: 'Location Name', dataField: 'Name', align: 'center', width: '50%' },
        { text: 'Population', dataField: 'Population', align: 'center', width: '50%', aggregates: ['min', 'max', 'count'] }
    ];
}