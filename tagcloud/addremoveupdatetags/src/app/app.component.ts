﻿import { Component, ViewChild } from '@angular/core';

import { generatedata } from '../assets/generatedata';

import { jqxTagCloudModule, jqxTagCloudComponent } from 'jqwidgets-ng/jqxtagcloud';
import { jqxButtonComponent, jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';

@Component({
    selector: 'app-root',
    imports: [jqxTagCloudModule, jqxButtonModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('tagCloud') tagCloud: jqxTagCloudComponent;

    getWidth(): any {
        if (document.body.offsetWidth < 600) {
            return '90%';
        }

        return 600;
    }

    source: any =
        {
            datatype: 'array',
            localdata: generatedata(50, false),
            datafields: [
                { name: 'productname' },
                { name: 'price' }
            ]
        };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    addItemClick(): void {
        let row = generatedata(1, false)[0];
        this.tagCloud.insertAt(0, row);
    };

    deleteItemClick(): void {
        this.tagCloud.removeAt(0);
    };

    updateItemClick(): void {
        let row = generatedata(1, false)[0];
        this.tagCloud.updateAt(0, row);
    };
}