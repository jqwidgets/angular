﻿import { Component, ViewChild } from '@angular/core';



import { jqxTreeGridModule, jqxTreeGridComponent } from 'jqwidgets-ng/jqxtreegrid';
@Component({
    selector: 'app-root',
    imports: [jqxTreeGridModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myTreeGrid') myTreeGrid: jqxTreeGridComponent;

    getWidth(): any {
        if (document.body.offsetWidth < 850) {
            return '90%';
        }

        return 850;
    }

    source: any =
        {
            dataType: 'csv',
            dataFields: [
                { name: 'EmployeeKey', type: 'number' },
                { name: 'ParentEmployeeKey', type: 'number' },
                { name: 'FirstName', type: 'string' },
                { name: 'LastName', type: 'string' },
                { name: 'Title', type: 'string' },
                { name: 'HireDate', type: 'date' },
                { name: 'BirthDate', type: 'date' },
                { name: 'Phone', type: 'string' },
                { name: 'Gender', type: 'string' },
                { name: 'DepartmentName', type: 'string' }
            ],
            hierarchy:
            {
                keyDataField: { name: 'EmployeeKey' },
                parentDataField: { name: 'ParentEmployeeKey' }
            },
            id: 'EmployeeKey',
            url: '../assets/employeesadv.txt'
        };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns =
        [
            { text: 'FirstName', dataField: 'FirstName', minWidth: 100, width: 200 },
            { text: 'LastName', dataField: 'LastName', width: 200 },
            { text: 'Department Name', dataField: 'DepartmentName', width: 150 },
            { text: 'Title', dataField: 'Title', width: 300 },
            { text: 'Birth Date', dataField: 'BirthDate', cellsFormat: 'd', width: 120 },
            { text: 'Hire Date', dataField: 'HireDate', cellsFormat: 'd', width: 120 },
            { text: 'Phone', dataField: 'Phone', cellsFormat: 'd', width: 120 }
        ];

    ready = (): void => {
        this.myTreeGrid.expandRow(32);
        this.myTreeGrid.expandRow(112);
    };
}