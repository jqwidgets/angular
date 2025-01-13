﻿import { Component, ViewChild, ElementRef } from '@angular/core';



import { jqxListBoxModule, jqxListBoxComponent } from 'jqwidgets-ng/jqxlistbox';
@Component({
    selector: 'app-root',
    imports: [jqxListBoxModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('selectionlog') selectionlog: ElementRef;

    url: string = "../assets/customers.txt";
    // prepare the data
    source: any = {
        datatype: "json",
        datafields: [
            { name: 'CompanyName' },
            { name: 'ContactName' }
        ],
        id: 'id',
        url: this.url
    };
    dataAdapter: any = new jqx.dataAdapter(this.source);

    select(event: any): void {
        if (event.args) {
            let item = event.args.item;
            if (item) {
                let valueElement = document.createElement('div');
                let labelElement = document.createElement('div');

                valueElement.innerHTML = 'Value: ' + item.value;
                labelElement.innerHTML = 'Label: ' + item.label;

                let selectionLog = this.selectionlog.nativeElement;

                selectionLog.innerHTML = '';

                selectionLog.appendChild(labelElement);
                selectionLog.appendChild(valueElement);
            }
        }
    };
}