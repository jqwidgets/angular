﻿import { Component } from '@angular/core';

import { jqxInputModule, jqxInputComponent } from 'jqwidgets-ng/jqxinput';
@Component({
    selector: 'app-root',
    imports: [jqxInputModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    source = (query: any, response: any): any => {
        let dataAdapter = new jqx.dataAdapter
            (
                {
                    datatype: 'jsonp',
                    datafields:
                        [
                            { name: 'countryName' }, { name: 'name' },
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
                            response($.map(data.geonames, (item) => {
                                return {
                                    label: item.name + (item.adminName1 ? ', ' + item.adminName1 : '') + ', ' + item.countryName,
                                    value: item.name
                                }
                            }));
                        }
                    }
                }
            );
    };
}