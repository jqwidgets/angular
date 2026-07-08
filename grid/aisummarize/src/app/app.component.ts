import { Component, ViewChild } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

/* AI summarize, offline: describe the selected rows (or the visible rows when
   none are selected) in a sentence or two. With jqxgrid.ai.js the aiSummarize()
   method sends the same rows to a model and returns its prose summary. */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    @ViewChild('grid', { static: false }) grid: jqxGridComponent;

    summary = '';

    data: any[] = this.generateData();
    source: any = {
        localdata: this.data, datatype: 'array', datafields: [
            { name: 'firstname', type: 'string' }, { name: 'productname', type: 'string' },
            { name: 'quantity', type: 'number' }, { name: 'price', type: 'number' }
        ]
    };
    dataAdapter: any = new jqx.dataAdapter(this.source);
    columns: any[] = [
        { text: 'Customer', datafield: 'firstname', width: 150 },
        { text: 'Product', datafield: 'productname', width: 230 },
        { text: 'Quantity', datafield: 'quantity', width: 120, cellsalign: 'right' },
        { text: 'Unit Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
    ];

    onReady = (): void => {
        this.grid.selectrow(0); this.grid.selectrow(1); this.grid.selectrow(2);
    };

    summarize(): void {
        const idx: any[] = this.grid.getselectedrowindexes() || [];
        const rows: any[] = idx.length ? idx.map(i => this.grid.getrowdata(i)) : this.grid.getrows();
        const products: any = {}, customers: any = {};
        let units = 0, value = 0;
        rows.forEach(r => { products[r.productname] = 1; customers[r.firstname] = 1; units += +r.quantity || 0; value += (+r.quantity || 0) * (+r.price || 0); });
        this.summary = 'These ' + rows.length + ' rows span ' + Object.keys(products).length + ' products and ' +
            Object.keys(customers).length + ' customers, with ' + units + ' units in total (about $' + value.toFixed(0) +
            ' of value). Quantities and prices vary across the selection - no single record dominates the set.';
    }

    generateData(): any[] {
        const firstNames = ['Andrew', 'Nancy', 'Shelley', 'Regina', 'Yoshi', 'Antoni', 'Mayumi', 'Ian', 'Peter', 'Lars', 'Petra', 'Martin'];
        const productNames = ['Black Tea', 'Green Tea', 'Caffe Espresso', 'Doubleshot Espresso', 'Caffe Latte', 'White Chocolate Mocha', 'Caramel Latte', 'Caffe Americano', 'Cappuccino', 'Espresso Truffle', 'Espresso con Panna', 'Peppermint Mocha Twist'];
        const priceValues = [2.25, 1.5, 3.0, 3.3, 4.5, 3.6, 3.8, 2.5, 5.0, 1.75, 3.25, 4.0];
        const data: any[] = [];
        for (let i = 0; i < 100; i++) {
            const p = Math.floor(Math.random() * productNames.length);
            data.push({ firstname: firstNames[Math.floor(Math.random() * firstNames.length)], productname: productNames[p], price: priceValues[p], quantity: 1 + Math.round(Math.random() * 10) });
        }
        return data;
    }
}
