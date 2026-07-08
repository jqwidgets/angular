import { Component, ViewChild } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';

/* An offline, self-contained take on the jqxGrid AI command bar: it turns a
   plain-language request into validated filter / sort actions and applies them
   through the standard Grid API. In production drop in jqxgrid.ai.js and set
   aiKey / aiProxyUrl to have a real model produce the same validated actions. */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    @ViewChild('grid', { static: false }) grid: jqxGridComponent;
    @ViewChild('q', { static: false }) q: jqxInputComponent;

    status = '';
    data: any[] = this.generateData();

    source: any = {
        localdata: this.data,
        datatype: 'array',
        datafields: [
            { name: 'firstname', type: 'string' },
            { name: 'lastname', type: 'string' },
            { name: 'productname', type: 'string' },
            { name: 'quantity', type: 'number' },
            { name: 'price', type: 'number' }
        ]
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] = [
        { text: 'First Name', datafield: 'firstname', width: 130 },
        { text: 'Last Name', datafield: 'lastname', width: 130 },
        { text: 'Product', datafield: 'productname', width: 200 },
        { text: 'Quantity', datafield: 'quantity', width: 100, cellsalign: 'right' },
        { text: 'Unit Price', datafield: 'price', cellsalign: 'right', cellsformat: 'c2' }
    ];

    private COMP: any[] = [
        [/greater than or equal|at least|>=/, 'GREATER_THAN_OR_EQUAL'],
        [/less than or equal|at most|<=/, 'LESS_THAN_OR_EQUAL'],
        [/over|above|greater than|more than|>/, 'GREATER_THAN'],
        [/under|below|less than|fewer than|</, 'LESS_THAN'],
        [/contains|includes|has/, 'CONTAINS'],
        [/equals|is|=/, 'EQUAL']
    ];

    run(): void {
        const text = ((this.q.val() as any) || '').toString().toLowerCase().trim();
        if (!text) { return; }
        this.grid.clearfilters();
        const applied: string[] = [];

        const clauses = text.split(/\s+and\s+|,|;/);
        for (const clause of clauses) {
            if (/sort/.test(clause)) { continue; }
            let op: any = null;
            for (const cmp of this.COMP) { if (cmp[0].test(clause)) { op = cmp[1]; break; } }
            if (!op) { continue; }

            let col: any = this.columns.find((c: any) => clause.indexOf(c.datafield.toLowerCase()) >= 0 || clause.indexOf(c.text.toLowerCase()) >= 0);
            if (!col && /\$|price|amount|total|cost/.test(clause)) { col = this.columns.find((c: any) => c.datafield === 'price'); }
            if (!col) { continue; }

            const isNum = col.datafield === 'price' || col.datafield === 'quantity';
            let val: any = null;
            const qm = /['"]([^'"]+)['"]/.exec(clause);
            if (qm) { val = qm[1]; }
            else if (isNum) { const nm = /(-?\d+(\.\d+)?)/.exec(clause); val = nm ? nm[1] : null; }
            else { const wm = /(?:contains|is|equals|=)\s+([a-z][\w-]*)/.exec(clause); val = wm ? wm[1] : null; }
            if (val === null || val === '') { continue; }
            if (!isNum && op === 'EQUAL' && !qm) { op = 'CONTAINS'; }

            const fg: any = new (jqx as any).filter();
            const f = fg.createfilter(isNum ? 'numericfilter' : 'stringfilter', isNum ? parseFloat(val) : val, op);
            fg.addfilter(1, f);
            this.grid.addfilter(col.datafield, fg);
            applied.push(col.text + ' ' + op.replace(/_/g, ' ').toLowerCase() + ' ' + val);
        }
        this.grid.applyfilters();

        const s = /sort(?:ed)?\s+by\s+([a-z ]+?)(?:\s+(asc|desc|ascending|descending))?(?:$|,)/.exec(text);
        if (s) {
            const key = s[1].trim();
            const scol = this.columns.find((c: any) => key.indexOf(c.datafield.toLowerCase()) >= 0 || key.indexOf(c.text.toLowerCase()) >= 0 || key.indexOf(c.text.toLowerCase().split(' ')[0]) >= 0);
            if (scol) { const dir = /desc/.test(s[2] || '') ? 'desc' : 'asc'; this.grid.sortby(scol.datafield, dir); applied.push('sorted by ' + scol.text + ' ' + dir); }
        }

        this.status = applied.length ? 'Applied: ' + applied.join(', ') : 'No matching actions were found in that request.';
    }

    reset(): void {
        this.grid.clearfilters();
        this.grid.removesort();
        (this.q as any).val('');
        this.status = '';
    }

    generateData(): any[] {
        const firstNames = ['Andrew', 'Nancy', 'Shelley', 'Regina', 'Yoshi', 'Antoni', 'Mayumi', 'Ian', 'Peter', 'Lars', 'Petra', 'Martin', 'Sven', 'Elio', 'Beate', 'Cheryl', 'Michael', 'Guylene'];
        const lastNames = ['Fuller', 'Davolio', 'Burke', 'Murphy', 'Nagase', 'Saavedra', 'Ohno', 'Devling', 'Wilson', 'Peterson', 'Winkler', 'Bein', 'Petersen', 'Rossi', 'Vileid', 'Saylor', 'Bjorn', 'Nodier'];
        const productNames = ['Black Tea', 'Green Tea', 'Caffe Espresso', 'Doubleshot Espresso', 'Caffe Latte', 'White Chocolate Mocha', 'Caramel Latte', 'Caffe Americano', 'Cappuccino', 'Espresso Truffle', 'Espresso con Panna', 'Peppermint Mocha Twist'];
        const priceValues = [2.25, 1.5, 3.0, 3.3, 4.5, 3.6, 3.8, 2.5, 5.0, 1.75, 3.25, 4.0];
        const data: any[] = [];
        for (let i = 0; i < 200; i++) {
            const p = Math.floor(Math.random() * productNames.length);
            data.push({
                firstname: firstNames[Math.floor(Math.random() * firstNames.length)],
                lastname: lastNames[Math.floor(Math.random() * lastNames.length)],
                productname: productNames[p],
                price: priceValues[p],
                quantity: 1 + Math.round(Math.random() * 10)
            });
        }
        return data;
    }
}
