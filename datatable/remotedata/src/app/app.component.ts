import { Component } from '@angular/core';

import { jqxDataTableModule, jqxDataTableComponent } from 'jqwidgets-ng/jqxdatatable';
@Component({
        selector: 'app-root',
        imports: [jqxDataTableModule],
        standalone: true,
        templateUrl: './app.component.html'
})

export class AppComponent {
              
              getWidth() : any {
		 if (document.body.offsetWidth < 850) {
			return '90%';
                 }
return 800;
                }
                                           source: any =    {        dataType: 'jsonp',
                                             dataFields: [
                                 { name: 'countryName', type: 'string' },
      { name: 'name', type: 'string' },
                              { name: 'population', type: 'float' },
inentCode', type: 'string' }

                e.geonames.org/searchJSON'    };    dataAdapter: any = new jqx.dataAdapter(this.source,
        
                ata: any): any {
                                  ss = 'P';
                = 'full';
                                               data.username = 'jqwidgets';
                                        axRows = 50;
                                  
                                            return data;
                                         }
            }
  columns: any[] =    [        { text: 'Country Name', dataField: 'countryName', width: 200 },
        xt: 'City', dataField: 'name', width: 250 },
                                 { text: 'Population', dataField: 'population', cellsFormat: 'f', width: 250 },
                                     { text: 'Continent Code', dataField: 'continentCode' }    ];
}