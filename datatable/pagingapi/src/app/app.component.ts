﻿import { Component, ViewChild } from '@angular/core';


import { jqxInputComponent, jqxInputModule } from 'jqwidgets-ng/jqxinput';
import { jqxPanelComponent, jqxPanelModule } from 'jqwidgets-ng/jqxpanel';

import { generatedata } from '../assets/generatedata';
import { jqxButtonComponent, jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';

import { jqxDataTableModule, jqxDataTableComponent } from 'jqwidgets-ng/jqxdatatable';
@Component({
    selector: 'app-root',
    imports: [jqxDataTableModule, jqxButtonModule, jqxPanelModule, jqxInputModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myDataTable') myDataTable: jqxDataTableComponent;
    @ViewChild('myInput') myInput: jqxInputComponent;
    @ViewChild('myPanel') myPanel: jqxPanelComponent;

    getWidth(): any {
        if (document.body.offsetWidth < 850) {
            return '90%';
        }

        return 850;
    }

    source: any =
        {
            localData: generatedata(200, false),
            dataType: 'array',
            datafields:
                [
                    { name: 'firstname', type: 'string' },
                    { name: 'lastname', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'quantity', type: 'number' },
                    { name: 'price', type: 'number' },
                    { name: 'total', type: 'number' }
                ]
        };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] =
        [
            { text: 'Name', dataField: 'firstname', width: 200 },
            { text: 'Last Name', dataField: 'lastname', width: 200 },
            { text: 'Product', editable: false, dataField: 'productname', width: 180 },
            { text: 'Quantity', dataField: 'quantity', width: 80, cellsalign: 'right' },
            { text: 'Unit Price', dataField: 'price', width: 80, cellsalign: 'right', cellsFormat: 'c2' },
            { text: 'Total', dataField: 'total', width: 80, cellsalign: 'right', cellsFormat: 'c2' }
        ];

    pagerModeListOnSelect(event: any): void {
        if (event.args.index == 0) {
            this.myDataTable.pagerMode('default');
        }
        else {
            this.myDataTable.pagerMode('advanced');
        }
    };

    pagerPositionListOnSelect(event: any): void {
        if (event.args.index == 0) {
            this.myDataTable.pagerPosition('top');
        }
        else if (event.args.index == 1) {
            this.myDataTable.pagerPosition('bottom');
        }
        else {
            this.myDataTable.pagerPosition('both');
        }
    };

    btnOnClick(): void {
        let page = parseInt(this.myInput.val());
        if (!isNaN(page)) {
            page--;
            if (page < 0) page = 0;
            this.myDataTable.goToPage(page);
        }
    };

    tableonPageChanged(event: any): void {
        let panel = this.myPanel.elementRef.nativeElement;
        let count = panel.getElementsByClassName('logged');
        if (count.length >= 5) {
            this.myPanel.clearcontent();
        }
        let args = event.args;
        let eventData = '<div>Page:' + (1 + args.pagenum) + ', Page Size: ' + args.pageSize + '</div>';
        this.myPanel.prepend('<div class="logged" style="margin-top: 5px;">' + eventData + '</div>');
    };

    tableOnPageSizeChanged(event: any): void {
        this.myPanel.clearcontent();
        let args = event.args;
        let eventData = '<div>Page:' + (1 + args.pagenum) + ', Page Size: ' + args.pageSize + ', Old Page Size: ' + args.oldPageSize + '</div>';
        this.myPanel.prepend('<div style="margin-top: 5px;">' + eventData + '</div>');
    };
}

