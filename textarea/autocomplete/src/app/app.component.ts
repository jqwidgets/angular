﻿import { Component } from '@angular/core';

import { jqxTextAreaModule, jqxTextAreaComponent } from 'jqwidgets-ng/jqxtextarea';
@Component({
    selector: 'app-root',
    imports: [jqxTextAreaModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    source = (query, response) => {
        let dataAdapter = new jqx.dataAdapter({
            datatype: 'jsonp',
            datafields:
                [
                    { name: 'countryName' },
                    { name: 'name' },
                    { name: 'population', type: 'float' },
                    { name: 'continentCode' },
                    { name: 'adminName1' }
                ],
            url: 'https://secure.geonames.org/searchJSON',
            data:
            {
                featureClass: 'P',
                style: 'full',
                maxRows: 12,
                username: 'jqwidgets'
            }
        },
            {
                autoBind: true,
                formatData: (data: any): any => {
                    data.name_startsWith = query;
                    return data;
                },
                loadComplete: (data: any): any => {
                    if (data.geonames.length > 0) {
                        response(data.geonames.map(item => {
                            return {
                                label: item.name + (item.adminName1 ? ', ' + item.adminName1 : '') + ', ' + item.countryName,
                                value: item.name
                            }
                        }));
                    }
                }
            });
    };
}