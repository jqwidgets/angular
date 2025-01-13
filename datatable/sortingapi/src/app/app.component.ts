import { Component, ViewChild } from '@angular/core'; 
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';

import { generatedata } from '../assets/generatedata';

import { jqxDataTableModule, jqxDataTableComponent } from 'jqwidgets-ng/jqxdatatable';
import { jqxDropDownListModule, jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxButtonComponent, jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';

@Component({
    selector: 'app-root',
    imports: [jqxDataTableModule, jqxButtonModule, jqxDropDownListModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent { 
    @ViewChild('myDataTable') myDataTable: jqxDataTableComponent;   
    @ViewChild('columnName') columnName: jqxDropDownListComponent;    
@ViewChild('sortOrder') sortOrder: jqxDropDownListComponent;    
        
	getWidth() : any {
		if (document.body.offsetWidth < 850) 
{
		 	return '90%';
		}
		
		return 850;
	}
    
          source: any =            {
                          localdata: generatedata(85, false),
                           datatype: "array",
                datafields:
                [
                         { name: 'firstname', type: 'string' },
                   { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
             { name: 'quantity', type: 'number' },
            name: 'price', type: 'number' },
            e: 'total', type: 'number' }
            
                  sortcolumn: 'firstname',
                    rection: 'asc'
                     
                        
                         any = new jqx.dataAdapter(this.source);
                        
                        [] =
                        
                text: 'Name', dataField: 'firstname', width: 200 },
            : 'Last Name', dataField: 'lastname', width: 200 },
          { text: 'Product', editable: false, dataField: 'productname', width: 180 },
          { text: 'Quantity', dataField: 'quantity', width: 80, align: 'right', cellsalign: 'right' },
          { text: 'Unit Price', dataField: 'price', width: 90, align: 'right', cellsalign: 'right', cellsFormat: 'c2' },
'Total', dataField: 'total', width: 100, align: 'right', cellsalign: 'right', cellsFormat: 'c2' }
            OnClick(): void {        let columnIndex = this.columnName.selectedIndex();
r = this.sortOrder.selectedIndex() == 0 ? 'asc' : 'desc';
          this.myDataTable.sortBy(this.columns[columnIndex].dat
        Field, sortOrder);
             clearBtnOnClick(): void {        this.myDataTable.sortBy('firstname', null);
    }}