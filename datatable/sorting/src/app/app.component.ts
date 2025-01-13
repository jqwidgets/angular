import { Component } from '@angular/core';

import { generatedata } from '../assets/generatedata';

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
                      localdata: generatedata(85, false),
            datatype: 'array',

  
    
      ds:
      [
          { name: 'fistname', type: 'string' },
           e: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
         { name: 'quantity', type: 'number' },
           { name: 'price', type: 'number' },
              { name: 'total', type: 'number' }
                      ],
                            column: 'firstname',
               direction: 'asc'
                
              
                             any = new jqx.dataAdapter(this.source);
 
  

', width: 200 },
e', dataField: 'lastname', width: 200 },
, editable: false, dataField: 'productname', width: 180 },
xt: 'Quantity', dataField: 'quantity', width: 80, align: 'right', cellsalign: 'right' },
idth: 90, align: 'right', cellsalign: 'right', cellsFormat: 'c2' },
  otal', dataField: 'total', width: 100, align: 'right', cellsalign: 'right', cellsFormat: 'c2' }

             
        : any {
                   nt.body.offsetWidth < 850) {
        0%';
                    
        
                rn 850;
	}
