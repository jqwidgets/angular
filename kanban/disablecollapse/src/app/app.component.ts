﻿import { Component, ViewChild } from '@angular/core';

import { jqxKanbanModule, jqxKanbanComponent } from 'jqwidgets-ng/jqxkanban';
@Component({
    selector: 'app-root',
    imports: [jqxKanbanModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myKanban') myKanban: jqxKanbanComponent;

    fields: any[] =
        [
            { name: 'id', type: 'string' },
            { name: 'status', map: 'state', type: 'string' },
            { name: 'text', map: 'label', type: 'string' },
            { name: 'tags', type: 'string' },
            { name: 'color', map: 'hex', type: 'string' },
            { name: 'resourceId', type: 'number' }
        ];

    getWidth(): any {
        if (document.body.offsetWidth < 850) {
            return '90%';
        }

        return 850;
    }

    source: any =
        {
            localData: [
                { id: '1161', state: 'new', label: 'Make a new Dashboard', tags: 'dashboard', hex: '#36c7d0', resourceId: 3 },
                { id: '1645', state: 'work', label: 'Prepare new release', tags: 'release', hex: '#ff7878', resourceId: 1 },
                { id: '9213', state: 'new', label: 'One item added to the cart', tags: 'cart', hex: '#96c443', resourceId: 3 },
                { id: '6546', state: 'done', label: 'Edit Item Price', tags: 'price, edit', hex: '#ff7878', resourceId: 4 },
                { id: '9034', state: 'new', label: 'Login 404 issue', tags: 'issue, login', hex: '#96c443' }
            ],
            dataType: 'array',
            dataFields: this.fields
        };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    resourcesAdapterFunc = (): any => {
        let resourcesSource =
        {
            localData: [
                { id: 0, name: 'No name', image: 'https://www.jqwidgets.com/angular/jqwidgets/styles/images/common.png', common: true },
                { id: 1, name: 'Andrew Fuller', image: 'https://www.jqwidgets.com/angular/images/andrew.png' },
                { id: 2, name: 'Janet Leverling', image: 'https://www.jqwidgets.com/angular/images/janet.png' },
                { id: 3, name: 'Steven Buchanan', image: 'https://www.jqwidgets.com/angular/images/steven.png' },
                { id: 4, name: 'Nancy Davolio', image: 'https://www.jqwidgets.com/angular/images/nancy.png' },
                { id: 5, name: 'Michael Buchanan', image: 'https://www.jqwidgets.com/angular/images/Michael.png' },
                { id: 6, name: 'Margaret Buchanan', image: 'https://www.jqwidgets.com/angular/images/margaret.png' },
                { id: 7, name: 'Robert Buchanan', image: 'https://www.jqwidgets.com/angular/images/robert.png' },
                { id: 8, name: 'Laura Buchanan', image: 'https://www.jqwidgets.com/angular/images/Laura.png' },
                { id: 9, name: 'Laura Buchanan', image: 'https://www.jqwidgets.com/angular/images/Anne.png' }
            ],
            dataType: 'array',
            dataFields: [
                { name: 'id', type: 'number' },
                { name: 'name', type: 'string' },
                { name: 'image', type: 'string' },
                { name: 'common', type: 'boolean' }
            ]
        };
        let resourcesDataAdapter = new jqx.dataAdapter(resourcesSource);
        return resourcesDataAdapter;
    }

    columns: any[] =
        [
            { text: 'Backlog', dataField: 'new', maxItems: 4 },
            { text: 'In Progress', dataField: 'work', maxItems: 2 },
            { text: 'Done', dataField: 'done', collapsible: false, maxItems: 5 }
        ];

    columnRenderer = (element: any, collapsedElement: any, column: any): void => {
        if (element[0]) {
            let elementHeaderStatus = element[0].getElementsByClassName('jqx-kanban-column-header-status')[0];
            let collapsedElementHeaderStatus = collapsedElement[0].getElementsByClassName('jqx-kanban-column-header-status')[0];

            let columnItems = this.myKanban.getColumnItems(column.dataField).length;

            elementHeaderStatus.innerHTML = ' (' + columnItems + '/' + column.maxItems + ')';
            collapsedElementHeaderStatus.innerHTML = ' (' + columnItems + '/' + column.maxItems + ')';
        }
    };
}