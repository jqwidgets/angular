import { Component, ViewChild } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxChartComponent } from 'jqwidgets-ng/jqxchart';

/* Ask-your-data, offline: the component answers a natural-language question
   from the visible rows and renders a chart of the matching aggregation.
   In production, drop in jqxgrid.ai.js and aiAsk() forwards the same
   aggregates + a row sample to Claude / OpenAI and returns the answer. */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    @ViewChild('grid', { static: false }) grid: jqxGridComponent;
    @ViewChild('q', { static: false }) q: jqxInputComponent;
    @ViewChild('chart', { static: false }) chart: jqxChartComponent;

    answerText = '';
    showChart = false;
    chartSource: any[] = [];

    padding: any = { left: 5, top: 10, right: 10, bottom: 5 };
    categoryAxis: any = { dataField: 'product', showGridLines: false, formatFunction: (v: any) => String(v).length > 12 ? String(v).slice(0, 11) + '…' : v };
    seriesGroups: any[] = [{
        type: 'column', columnsGapPercent: 55,
        valueAxis: { visible: true, gridLinesColor: '#eef0f4' },
        series: [{ dataField: 'value', displayText: 'Value' }]
    }];

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

    chips: string[] = ['what is the average unit price?', 'what is the total quantity?', 'how many rows are there?'];

    askChip(c: string): void { (this.q as any).val(c); this.ask(); }

    ask(): void {
        const q = ((this.q.val() as any) || '').toString().toLowerCase().trim();
        if (!q) { return; }
        const rows: any[] = this.grid.getrows();
        const numField = /quantit/.test(q) ? 'quantity' : 'price';
        let agg = 'sum';

        if (/how many|count|number of/.test(q)) {
            this.answerText = 'There are ' + rows.length + ' rows in the current (filtered) view.';
            this.showChart = false; return;
        }
        if (/average|avg|mean/.test(q)) {
            let s = 0; rows.forEach(r => s += +r[numField] || 0);
            this.answerText = 'The average ' + numField + ' across the ' + rows.length + ' visible rows is about ' + (rows.length ? s / rows.length : 0).toFixed(2) + '.';
            agg = 'avg';
        } else if (/total|sum/.test(q)) {
            let s = 0; rows.forEach(r => s += +r[numField] || 0);
            this.answerText = 'The total ' + numField + ' is ' + s.toFixed(2) + ' over ' + rows.length + ' rows.';
            agg = 'sum';
        } else {
            this.answerText = 'Across the ' + rows.length + ' rows the ' + numField + ' varies by product - here is the breakdown.';
            agg = 'sum';
        }

        const by: any = {}, cnt: any = {};
        rows.forEach(r => { const k = r.productname; by[k] = (by[k] || 0) + (+r[numField] || 0); cnt[k] = (cnt[k] || 0) + 1; });
        this.chartSource = Object.keys(by)
            .map(k => ({ product: k, value: Math.round((agg === 'avg' ? by[k] / cnt[k] : by[k]) * 100) / 100 }))
            .sort((a, b) => b.value - a.value).slice(0, 8);
        this.showChart = true;
        setTimeout(() => { try { this.chart.update(); } catch (e) { } }, 0);
    }

    generateData(): any[] {
        const firstNames = ['Andrew', 'Nancy', 'Shelley', 'Regina', 'Yoshi', 'Antoni', 'Mayumi', 'Ian', 'Peter', 'Lars', 'Petra', 'Martin', 'Sven', 'Elio', 'Beate', 'Cheryl'];
        const productNames = ['Black Tea', 'Green Tea', 'Caffe Espresso', 'Doubleshot Espresso', 'Caffe Latte', 'White Chocolate Mocha', 'Caramel Latte', 'Caffe Americano', 'Cappuccino', 'Espresso Truffle', 'Espresso con Panna', 'Peppermint Mocha Twist'];
        const priceValues = [2.25, 1.5, 3.0, 3.3, 4.5, 3.6, 3.8, 2.5, 5.0, 1.75, 3.25, 4.0];
        const data: any[] = [];
        for (let i = 0; i < 120; i++) {
            const p = Math.floor(Math.random() * productNames.length);
            data.push({ firstname: firstNames[Math.floor(Math.random() * firstNames.length)], productname: productNames[p], price: priceValues[p], quantity: 1 + Math.round(Math.random() * 10) });
        }
        return data;
    }
}
