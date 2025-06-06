﻿import { Component, ViewChild } from '@angular/core';

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
	{ product: 'Pineapple', quantity: 1, price: 2.5 },
	{ product: 'Papaya', quantity: 2, price: 3.0 },
	{ product: 'Watermelon', quantity: 1, price: 4.5 },
	{ product: 'Cantaloupe', quantity: 2, price: 3.2 },
	{ product: 'Plums', quantity: 5, price: 1.3 },
	{ product: 'Apricots', quantity: 4, price: 2.0 },
	{ product: 'Lemons', quantity: 6, price: 0.7 },
	{ product: 'Limes', quantity: 6, price: 0.6 },
	{ product: 'Pears', quantity: 3, price: 1.4 },
	{ product: 'Raspberries', quantity: 2, price: 3.8 },
	{ product: 'Coconuts', quantity: 2, price: 2.7}

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

  selectedRow: any = {
    product: '',
    quantity: 0,
    price: 0,
    total: 0,
  };

  gaugeRanges: any[] = [
    {
      startValue: 0,
      endValue: 3,
      style: { fill: '#4bb648', stroke: '#4bb648' },
      endWidth: 5,
      startWidth: 1,
    },
    {
      startValue: 3,
      endValue: 5,
      style: { fill: '#fbd109', stroke: '#fbd109' },
      endWidth: 10,
      startWidth: 5,
    },
    {
      startValue: 5,
      endValue: 7,
      style: { fill: '#ff8000', stroke: '#ff8000' },
      endWidth: 13,
      startWidth: 10,
    },
    {
      startValue: 7,
      endValue: 10,
      style: { fill: '#e02629', stroke: '#e02629' },
      endWidth: 16,
      startWidth: 13,
    },
  ];

  chartData: any[] = [];

  chartXAxis: any = {
    dataField: 'label',
    gridLines: { visible: false },
  };

  chartValueAxis: any = {
    minValue: 0,
    maxValue: 10,
    title: { text: 'Price €' },
    unitInterval: 1,
  };

  chartSeriesGroups: any[] = [
    {
      type: 'column',
      columnsGapPercent: 50,
      series: [{ dataField: 'value', displayText: 'Value' }],
    },
  ];

  onRowSelect(event: any): void {
    const row = event.args.row;
    this.selectedRow = row;
    this.selectedRow.total = this.selectedRow.quantity * this.selectedRow.price;
    // Generate mock chart data for demonstration
    this.chartData = Array.from({ length: 5 }, (_, i) => ({
      label: `Week ${i + 1}`,
      value: +(Math.random() * 5 + 1).toFixed(2),
    }));

	
	setTimeout(()=> {
      const sidePanel: HTMLElement = document.querySelector(
        '#sidePanel'
      ) as HTMLElement;

      this.myGrid.showSidePanel(sidePanel, 400, (panel) => {
    	panel.firstElementChild.style.opacity =1;
        panel = JQXLite(panel);
	    panel.find("#productName").text(row.product);
        panel.find("#productQty").text(row.quantity);
        panel.find("#productPrice").text(row.price.toFixed(2) + ' €');
        panel.find("#productTotal").text((row.quantity * row.price).toFixed(2) + ' €');
        // Gauge
			
		
		panel.find("#quantityGauge").jqxGauge({
            ranges: [{ startValue: 0, endValue: 3, style: { fill: '#4bb648', stroke: '#4bb648' }, endWidth: 5, startWidth: 1 },
            { startValue: 3, endValue: 5, style: { fill: '#fbd109', stroke: '#fbd109' }, endWidth: 10, startWidth: 5 },
            { startValue: 5, endValue: 7, style: { fill: '#ff8000', stroke: '#ff8000' }, endWidth: 13, startWidth: 10 },
            { startValue: 7, endValue: 10, style: { fill: '#e02629', stroke: '#e02629' }, endWidth: 16, startWidth: 13 }],
            colorScheme: 'scheme05',
            width: 200,
            height: 200,
            animationDuration: 1200,
            max: 10,
            niceInterval: true,
            value: row.quantity
        });
      });
	}, 200);
  }
}
