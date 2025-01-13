﻿import { Component, ViewChild } from '@angular/core';



import { jqxTreeGridModule, jqxTreeGridComponent } from 'jqwidgets-ng/jqxtreegrid';
@Component({
    selector: 'app-root',
    imports: [jqxTreeGridModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('TreeGrid') treeGrid: jqxTreeGridComponent

    getWidth(): any {
        if (document.body.offsetWidth < 850) {
            return '90%';
        }

        return 850;
    }


    data: any[] = [
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
        { text: "Name", dataField: "name", width: 250 },
        { text: "Budget", dataField: "budget", cellsFormat: "c2", width: 250 },
        { text: "Location", dataField: "location" }
    ];

    ready(): void {
        this.treeGrid.expandRow(1);
        this.treeGrid.expandRow(2);
    }
}