import { Component, ViewChild } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

/* AI classify-column, offline: one click labels every row and writes the label
   into a real Grid column. Here the label is bucketed from price; with
   jqxgrid.ai.js the aiClassifyColumn() method sends the rows to a model and
   writes back its labels the same way. */
function tierCell(row: any, column: any, value: any): string {
    if (!value) { return '<span style="color:#cbd5e1;padding:0 10px">—</span>'; }
    const colors: any = { Low: '#64748b', Medium: '#4f46e5', High: '#16a34a' };
    return '<span style="display:inline-block;margin:5px 8px;padding:3px 12px;border-radius:999px;font-size:12px;font-weight:600;color:#fff;background:' + (colors[value] || '#64748b') + '">' + value + '</span>';
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    @ViewChild('grid', { static: false }) grid: jqxGridComponent;

    busy = false;
    note = '';

    data: any[] = this.generateData();
    source: any = {
        localdata: this.data, datatype: 'array', datafields: [
            { name: 'firstname', type: 'string' }, { name: 'productname', type: 'string' },
            { name: 'quantity', type: 'number' }, { name: 'price', type: 'number' },
            { name: 'tier', type: 'string' }
        ]
    };
    dataAdapter: any = new jqx.dataAdapter(this.source);
    columns: any[] = [
        { text: 'Customer', datafield: 'firstname', width: 130 },
        { text: 'Product', datafield: 'productname', width: 210 },
        { text: 'Quantity', datafield: 'quantity', width: 110, cellsalign: 'right' },
        { text: 'Unit Price', datafield: 'price', width: 120, cellsalign: 'right', cellsformat: 'c2' },
        { text: 'Price Tier (AI)', datafield: 'tier', width: 150, cellsrenderer: tierCell }
    ];

    classify(): void {
        this.busy = true; this.note = '';
        // pretend to call a model, then bucket price into Low / Medium / High
        setTimeout(() => {
            const prices = this.data.map(d => d.price);
            const lo = Math.min.apply(null, prices), hi = Math.max.apply(null, prices);
            const t1 = lo + (hi - lo) / 3, t2 = lo + 2 * (hi - lo) / 3;
            let written = 0;
            for (let i = 0; i < this.data.length; i++) {
                const p = this.data[i].price;
                const label = p <= t1 ? 'Low' : p <= t2 ? 'Medium' : 'High';
                this.grid.setcellvalue(i, 'tier', label);
                written++;
            }
            this.busy = false;
            this.note = 'Wrote an AI label into ' + written + ' rows of the Price Tier column.';
        }, 500);
    }

    generateData(): any[] {
        const firstNames = ['Andrew', 'Nancy', 'Shelley', 'Regina', 'Yoshi', 'Antoni', 'Mayumi', 'Ian', 'Peter', 'Lars', 'Petra', 'Martin'];
        const productNames = ['Black Tea', 'Green Tea', 'Caffe Espresso', 'Doubleshot Espresso', 'Caffe Latte', 'White Chocolate Mocha', 'Caramel Latte', 'Caffe Americano', 'Cappuccino', 'Espresso Truffle', 'Espresso con Panna', 'Peppermint Mocha Twist'];
        const priceValues = [2.25, 1.5, 3.0, 3.3, 4.5, 3.6, 3.8, 2.5, 5.0, 1.75, 3.25, 4.0];
        const data: any[] = [];
        for (let i = 0; i < 80; i++) {
            const p = Math.floor(Math.random() * productNames.length);
            data.push({ firstname: firstNames[Math.floor(Math.random() * firstNames.length)], productname: productNames[p], price: priceValues[p], quantity: 1 + Math.round(Math.random() * 10), tier: '' });
        }
        return data;
    }
}
