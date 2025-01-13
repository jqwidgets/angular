﻿import { Component, ViewChild, ElementRef } from '@angular/core';

import { jqxDropDownListModule, jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
@Component({
    selector: 'app-root',
    imports: [jqxDropDownListModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myDropDownList') myDropDownList: jqxDropDownListComponent;
    @ViewChild('log') log: ElementRef;
    @ViewChild('checkedItemsLog') checkedItemsLog: ElementRef;

    source: any = {
        datatype: 'json',
        datafields: [
            { name: 'CompanyName' },
            { name: 'ContactName' }
        ],
        id: 'id',
        url: '../assets/customers.txt'
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    listOnSelect(event: any): void {
        if (event.args) {
            let item = event.args.item;
            if (item) {
                let valueElement = document.createElement('div');
                valueElement.innerHTML = `Value: ${item.value}`;

                let labelElement = document.createElement('div');
                labelElement.innerHTML = `Label: ${item.label}`;

                let checkedElement = document.createElement('div');
                checkedElement.innerHTML = `Checked: ${item.checked}`;

                let selectionLog = this.log.nativeElement;
                selectionLog.innerHTML = '';
                selectionLog.appendChild(labelElement);
                selectionLog.appendChild(valueElement);
                selectionLog.appendChild(checkedElement);

                let items = this.myDropDownList.getCheckedItems();
                let checkedItems = '';
                for (let i = 0; i < items.length; i++) {
                    checkedItems += items[i].label + ', ';
                }
                this.checkedItemsLog.nativeElement.innerHTML = checkedItems;
            }
        }
    };
}
