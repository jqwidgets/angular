﻿import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

import { jqxComboBoxModule, jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';
@Component({
    selector: 'app-root',
    imports: [jqxComboBoxModule],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit {
    @ViewChild('myComboBox') myComboBox: jqxComboBoxComponent;
    @ViewChild('selectionlog') selectionlog: ElementRef;
    @ViewChild('checkedItemsLog') checkedItemsLog: ElementRef;

    ngAfterViewInit(): void {
        this.myComboBox.checkIndex(0)
    }

    source: any =
        {
            datatype: 'json',
            datafields: [
                { name: 'CompanyName' },
                { name: 'ContactName' }
            ],
            id: 'id',
            url: '../assets/customers.txt',
            async: false
        };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    myComboBoxOnCheckChange(event: any): void {
        if (event.args) {
            let item = event.args.item;
            if (item) {
                let valueElement = document.createElement('div');
                valueElement.innerHTML = 'Value: ' + item.value;
                let labelElement = document.createElement('div');
                labelElement.innerHTML = 'Label: ' + item.label;
                let checkedElement = document.createElement('div');
                checkedElement.innerHTML = 'Checked: ' + item.checked;
                let selectionLog = this.selectionlog.nativeElement;
                selectionLog.innerHTML = '';
                selectionLog.appendChild(labelElement);
                selectionLog.appendChild(valueElement);
                selectionLog.appendChild(checkedElement);


                let items = this.myComboBox.getCheckedItems();
                let checkedItems = '';
                for (let obj of items) {
                    checkedItems += obj.label + ', ';
                }
                this.checkedItemsLog.nativeElement.innerHTML = checkedItems;
            }
        }
    };
}
