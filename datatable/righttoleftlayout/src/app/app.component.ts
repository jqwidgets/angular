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
        
        getWidth() : any {
		 if (document.body.offsetWidth < 850) {
			return '90%';
		   }
	
         return 850;
} 

   source: any=  {        localData: generatedata(200, false),
                 dataType: 'array',
               datafields:
       'firstname', type: 'string' },
      name: 'lastname', type: 'string' },
      ame: 'productname', type: 'string' },
      ame: 'quantity', type: 'number' },
       type: 'number' },
   type: 'number' }
   dataAdapter: any = new jqx.dataAdapter(this.source);   

columns: any[] =    [        { text: 'Name', dataField: 'firstname', align: 'right', cellsAlign: 'right', width: 150 },
     ast Name', dataField: 'lastname', align: 'right', cellsAlign: 'right', width: 150 },
 aField: 'productname', align: 'right', cellsAlign: 'right', width: 180 },
         ntity', dataField: 'quantity', width: 180, cellsAlign: 'left', align: 'left' },
                          xt: 'Unit Prie', dataField: 'price', width: 180, cellsAlign: 'left', align: 'left' },
          : 'Total', dataField: 'total', width: 180, cellsAlign: 'left', align: 'left', cellsformat: 'c2' }    ];
}