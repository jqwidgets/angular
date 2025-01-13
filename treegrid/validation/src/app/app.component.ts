﻿import { Component, ViewChild } from '@angular/core';



import { jqxTreeGridModule, jqxTreeGridComponent } from 'jqwidgets-ng/jqxtreegrid';
@Component({
    selector: 'app-root',
    imports: [jqxTreeGridModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('TreeGrid') treeGrid: jqxTreeGridComponent;

    data = [
        {
            'id': '1', 'name': 'Corporate Headquarters', 'budget': '1230000', 'location': 'Las Vegas',
            'children':
                [
                    {
                        'id': '2', 'name': 'Finance Division', 'budget': '423000', 'location': 'San Antonio',
                        'children':
                            [
                                { 'id': '3', 'name': 'Accounting Department', 'budget': '113000', 'location': 'San Antonio' },
                                {
                                    'id': '4', 'name': 'Investment Department', 'budget': '310000', 'location': 'San Antonio',
                                    'children':
                                        [
                                            { 'id': '5', 'name': 'Banking Office', 'budget': '240000', 'location': 'San Antonio' },
                                            { 'id': '6', 'name': 'Bonds Office', 'budget': '70000', 'location': 'San Antonio' },
                                        ]
                                }
                            ]
                    },
                    {
                        'id': '7', 'name': 'Operations Division', 'budget': '600000', 'location': 'Miami',
                        'children':
                            [
                                { 'id': '8', 'name': 'Manufacturing Department', 'budget': '300000', 'location': 'Miami' },
                                { 'id': '9', 'name': 'Public Relations Department', 'budget': '200000', 'location': 'Miami' },
                                { 'id': '10', 'name': 'Sales Department', 'budget': '100000', 'location': 'Miami' }
                            ]
                    },
                    { 'id': '11', 'name': 'Research Division', 'budget': '200000', 'location': 'Boston' }
                ]
        }
    ];

    getWidth(): any {
        if (document.body.offsetWidth < 850) {
            return '90%';
        }

        return 850;
    }

    // prepare the data
    source: any =
        {
            dataType: 'json',
            dataFields: [
                { name: 'name', type: 'string' },
                { name: 'budget', type: 'number' },
                { name: 'id', type: 'number' },
                { name: 'children', type: 'array' },
                { name: 'location', type: 'string' }
            ],
            hierarchy:
            {
                root: 'children'
            },
            localData: this.data,
            id: 'id'
        };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] = [
        { text: 'ID', editable: false, columnType: 'none', dataField: 'id', width: 150 },
        {
            text: 'Name', dataField: 'name', width: 270,
            validation: (cell, value) => {
                if (value.toString().length < 4) {
                    return { message: 'Name should be minimum 4 characters', result: false };
                }

                return true;
            }
        },
        {
            text: 'Budget', align: 'right', cellsAlign: 'right', cellsFormat: 'c2', dataField: 'budget', width: 200,
            validation: (cell, value) => {
                if (parseInt(value) < 0 || parseInt(value) > 1300000 || value == '') {
                    return { message: 'Budget should be in the 0-1 300 000 interval', result: false };
                }

                return true;
            }
        },
        {
            text: 'Location', dataField: 'location',
            validation: (cell, value) => {
                if (value.toString().length < 4) {
                    return { message: 'location should be minimum 4 characters', result: false };
                }

                return true;
            }
        }
    ];

    ready(): void {
        this.treeGrid.expandRow(1);
        this.treeGrid.expandRow(2);
        this.treeGrid.expandRow(7);
    };
}