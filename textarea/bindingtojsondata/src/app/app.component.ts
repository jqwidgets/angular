﻿import { Component, ViewChild, ElementRef } from '@angular/core';

import { jqxTextAreaComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtextarea.ts';

import { jqxTextAreaModule, jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
@Component({
    selector: 'app-root',
    imports: [jqxTextAreaModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('selectionlog') selectionlog: ElementRef;

    url: string = '../assets/customers.txt';

    source: any =
        {
            datatype: 'json',
            datafields: [
                { name: 'CompanyName' },
                { name: 'ContactName' }
            ],
            url: this.url
        };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    select(event: any): void {
        if (event.args) {
            let item = event.args.item;
            if (item) {
                this.selectionlog.nativeElement.innerHTML = '<div>Value: ' + item.value + '</div><div>Label: ' + item.label + '</div>';
            }
        }
    };
}