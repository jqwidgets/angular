import { Component, ViewChild } from '@angular/core';

import { jqxGridModule, jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { jqxGaugeModule } from 'jqwidgets-ng/jqxgauge';
import { jqxChartModule } from 'jqwidgets-ng/jqxchart';
declare var JQXLite: any; // Declare it here globally for TypeScript

@Component({
  selector: 'app-root',
  imports: [jqxGridModule, jqxGaugeModule, jqxChartModule],
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent {
  @ViewChild('myGrid', { static: false }) myGrid: jqxGridComponent;

  data: any[] = [
    { product: 'Apples', quantity: 3, price: 1.2 },
    { product: 'Oranges', quantity: 5, price: 0.8 },
    { product: 'Bananas', quantity: 2, price: 1.5 },
    { product: 'Strawberries', quantity: 1, price: 3.9 },
    { product: 'Grapes', quantity: 4, price: 2.1 },
    { product: 'Peaches', quantity: 6, price: 1.1 },
    { product: 'Cherries', quantity: 3, price: 4.2 },
    { product: 'Mangoes', quantity: 2, price: 2.8 },
    { product: 'Blueberries', quantity: 2, price: 3.6 },
    { product: 'Kiwi', quantity: 4, price: 1.9 },
  ];

  source: any = {
    localdata: this.data,
    datatype: 'array',
    datafields: [
      { name: 'product', type: 'string' },
      { name: 'quantity', type: 'number' },
      { name: 'price', type: 'number' },
      {
        name: 'total',
        type: 'number',
        map: '',
        calculate: (record: any) => record.quantity * record.price,
      },
    ],
  };

  dataAdapter: any = new jqx.dataAdapter(this.source);

  columns: any[] = [
    { text: 'Product', datafield: 'product', width: 250 },
    { text: 'Quantity', datafield: 'quantity', width: 200 },
    { text: 'Price', datafield: 'price', width: 200, cellsformat: 'c2' },
    {
      text: 'Total',
      datafield: 'total',
      cellsformat: 'c2',
      cellsrenderer: (
        _row: any,
        _column: any,
        value: any,
        _html: any,
        _props: any,
        data: any
      ) => {
        return `<div style="margin: 5px;">${(
          data.quantity * data.price
        ).toFixed(2)} €</div>`;
      },
    },
  ];
}
