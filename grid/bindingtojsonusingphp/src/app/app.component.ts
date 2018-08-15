import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    source: any =
    {
        datatype: 'json',
        datafields: [
            { name: 'firstname' },
            { name: 'lastname' },
            { name: 'productname' },
            { name: 'quantity', type: 'int' },
            { name: 'price', type: 'float' },
            { name: 'total', type: 'float' }
        ],
        id: 'id',
        url: '../assets/data.txt',
        root: 'data'
    };

	getWidth() : any {
		if (document.body.offsetWidth < 850) {
			return '90%';
		}
		
		return 850;
	}

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] =
    [
        { text: 'First Name', dataField: 'firstname', width: 200 },
        { text: 'Last Name', dataField: 'lastname', width: 200 },
        { text: 'Product', dataField: 'productname', width: 180 },
        { text: 'Quantity', dataField: 'quantity', width: 80, cellsalign: 'right' },
        { text: 'Unit Price', dataField: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
        { text: 'Total', dataField: 'total', cellsalign: 'right', minwidth: 100, cellsformat: 'c2' }
    ];
}