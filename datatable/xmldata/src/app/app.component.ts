﻿import { Component } from '@angular/core';

import { jqxDataTableModule, jqxDataTableComponent } from 'jqwidgets-ng/jqxdatatable';
@Component({
    selector: 'app-root',
    imports: [jqxDataTableModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    source: any =
        {
            datatype: 'xml',
            datafields: [
                { name: 'CompanyName', map: 'm\\:properties>d\\:CompanyName', type: 'string' },
                { name: 'ContactName', map: 'm\\:properties>d\\:ContactName', type: 'string' },
                { name: 'ContactTitle', map: 'm\\:properties>d\\:ContactTitle', type: 'string' },
                { name: 'City', map: 'm\\:properties>d\\:City', type: 'string' },
                { name: 'PostalCode', map: 'm\\:properties>d\\:PostalCode', type: 'string' },
                { name: 'Country', map: 'm\\:properties>d\\:Country', type: 'string' }
            ],
            root: 'entry',
            record: 'content',
            id: 'm\\:properties>d\\:CustomerID',
            url: '../assets/customers.txt'
        };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] =
        [
            { text: 'Company Name', datafield: 'CompanyName', width: 250 },
            { text: 'Contact Name', datafield: 'ContactName', width: 250 },
            { text: 'Contact Title', datafield: 'ContactTitle', width: 250 },
            { text: 'City', datafield: 'City', width: 120 },
            { text: 'Postal Code', datafield: 'PostalCode', width: 90 },
            { text: 'Country', datafield: 'Country', width: 100 }
        ];
}