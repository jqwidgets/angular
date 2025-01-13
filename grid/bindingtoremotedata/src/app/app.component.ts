﻿import { Component } from '@angular/core';

import { jqxGridModule, jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
@Component({
    selector: 'app-root',
    imports: [jqxGridModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    source: any =
        {
            datatype: 'jsonp',
            datafields: [
                { name: 'countryName', type: 'string' },
                { name: 'name', type: 'string' },
                { name: 'population', type: 'float' },
                { name: 'continentCode', type: 'string' }
            ],
            url: 'https://secure.geonames.org/searchJSON'
        };

    getWidth(): any {
        if (document.body.offsetWidth < 850) {
            return '90%';
        }

        return 850;
    }

    dataAdapter: any = new jqx.dataAdapter(this.source,
        {
            formatData: (data: any): any => {
                data.featureClass = 'P';
                data.style = 'full';
                data.maxRows = 50;
                data.username = 'jqwidgets';
                return data;
            }
        }
    );

    columns: any[] =
        [
            { text: 'Country Name', datafield: 'countryName', width: 200 },
            { text: 'City', datafield: 'name', width: 170 },
            { text: 'Population', datafield: 'population', cellsformat: 'f', width: 170 },
            { text: 'Continent Code', datafield: 'continentCode', minwidth: 110 }
        ];
}