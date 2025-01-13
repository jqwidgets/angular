﻿import { Component, ViewChild } from '@angular/core';

import { jqxButtonComponent, jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxKanbanComponent, jqxKanbanModule } from 'jqwidgets-ng/jqxkanban';
 
@Component({
    selector: 'app-root',
    imports: [jqxButtonModule, jqxKanbanModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myKanban') myKanban: jqxKanbanComponent;
    @ViewChild('myRemoveItemBtn') myRemoveItemBtn: jqxButtonComponent;
    @ViewChild('myUpdateItemBtn') myUpdateItemBtn: jqxButtonComponent;

    newItemsCount: number = 0;

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
        if (document.body.offsetWidth < 600) {
            return '90%';
        }

        return 600;
    }

    source: any =
        {
            localData: [
                { id: '1161', state: 'new', label: 'Combine Orders', tags: 'orders, combine', hex: '#5dc3f0', resourceId: 3 },
                { id: '1645', state: 'work', label: 'Change Billing Address', tags: 'billing', hex: '#f19b60', resourceId: 1 },
                { id: '9213', state: 'new', label: 'One item added to the cart', tags: 'cart', hex: '#5dc3f0', resourceId: 3 },
                { id: '6546', state: 'done', label: 'Edit Item Price', tags: 'price, edit', hex: '#5dc3f0', resourceId: 4 },
                { id: '9034', state: 'new', label: 'Login 404 issue', tags: 'issue, login', hex: '#6bbd49' }
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
            { text: 'Backlog', dataField: 'new', maxItems: 5 },
            { text: 'In Progress', dataField: 'work', maxItems: 5 },
            { text: 'Done', dataField: 'done', maxItems: 5, collapseDirection: 'right' }
        ];

    addItemBtnOnClick(): void {
        this.myKanban.addItem({ status: 'new', text: 'Task' + this.newItemsCount, tags: 'task' + this.newItemsCount, color: '#5dc3f0' });
        this.newItemsCount++;
    };

    removeItemBtnOnClick(): void {
        this.myKanban.removeItem('1645');
        this.myRemoveItemBtn.disabled(true)
    };


    updateItemBtnOnClick(): void {
        this.myKanban.updateItem('1161', { status: 'new', text: 'Task', tags: 'task', color: '#5dc3f0', resourceId: 3 });
        this.myUpdateItemBtn.disabled(true);
    };
}