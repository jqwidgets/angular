import { Component, AfterContentInit, ViewChild, AfterViewInit } from '@angular/core';

import { jqxTextAreaComponent, jqxTextAreaModule } from 'jqwidgets-ng/jqxtextarea';
import { jqxButtonComponent, jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';

import { jqxWindowComponent, jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxDataTableComponent, jqxDataTableModule } from 'jqwidgets-ng/jqxdatatable';

import { jqxPivotDesignerComponent } from 'jqwidgets-ng/jqxpivotgrid';
import { jqxPivotGridModule, jqxPivotGridComponent } from 'jqwidgets-ng/jqxpivotgrid';

@Component({
	selector: 'app-root',
	imports: [jqxPivotGridModule, jqxTextAreaModule, jqxButtonModule, jqxWindowModule, jqxDataTableModule],
	standalone: true,
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
   @ViewChild('pivotGrid1') pivotGrid1: jqxPivotGridComponent;
   @ViewChild('eventsLog') eventsLog: jqxTextAreaComponent;

   constructor() {
      this.pivotDataSource = this.createPivotDataSource();
   }

   getWidth(): any {
      if (document.body.offsetWidth < 850) {
         return '90%';
      }

      return 850;
   }

   ngAfterViewInit(): void {
   }

   pivotDataSource: null;

   createPivotDataSource(): any {
      // prepare sample data
      let data = new Array();

      let firstNames =
         [
            "Andrew", "Nancy", "Shelley", "Regina", "Yoshi", "Antoni", "Mayumi", "Ian", "Peter", "Lars", "Petra", "Martin", "Sven", "Elio", "Beate", "Cheryl", "Michael", "Guylene"
         ];

      let lastNames =
         [
            "Fuller", "Davolio", "Burke", "Murphy", "Nagase", "Saavedra", "Ohno", "Devling", "Wilson", "Peterson", "Winkler", "Bein", "Petersen", "Rossi", "Vileid", "Saylor", "Bjorn", "Nodier"
         ];

      let productNames =
         [
            "Black Tea", "Green Tea", "Caffe Espresso"
         ];

      let priceValues =
         [
            "2.25", "1.5", "3.0", "3.3", "4.5", "3.6", "3.8", "2.5", "5.0", "1.75", "3.25", "4.0"
         ];

      for (let i = 0; i < 500; i++) {
         let row = {};
         let productindex = Math.floor(Math.random() * productNames.length);
         let price = parseFloat(priceValues[productindex]);
         let quantity = 1 + Math.round(Math.random() * 10);

         row["firstname"] = firstNames[Math.floor(Math.random() * firstNames.length)];
         row["lastname"] = lastNames[Math.floor(Math.random() * lastNames.length)];
         row["productname"] = productNames[productindex];
         row["price"] = price;
         row["quantity"] = quantity;
         row["total"] = price * quantity;

         data[i] = row;
      }

      // create a data source and data adapter
      let source =
      {
         localdata: data,
         datatype: "array",
         datafields:
            [
               { name: 'firstname', type: 'string' },
               { name: 'lastname', type: 'string' },
               { name: 'productname', type: 'string' },
               { name: 'quantity', type: 'number' },
               { name: 'price', type: 'number' },
               { name: 'total', type: 'number' }
            ]
      };

      let dataAdapter = new jqx.dataAdapter(source);
      dataAdapter.dataBind();

      // create a pivot data source from the dataAdapter
      let pivotDataSource = new jqx.pivot(
         dataAdapter,
         {
            pivotValuesOnRows: false,
            totals: { rows: { subtotals: true, grandtotals: true }, columns: { subtotals: false, grandtotals: true } },
            rows: [{ dataField: 'firstname' }, { dataField: 'lastname' }],
            columns: [{ dataField: 'productname' }],
            values: [
               { dataField: 'price', 'function': 'sum', text: 'sum', formatSettings: { prefix: '$', decimalPlaces: 2 } },
               { dataField: 'price', 'function': 'count', text: 'count' },
               { dataField: 'price', 'function': 'average', text: 'average', formatSettings: { prefix: '$', decimalPlaces: 2 } }
            ]
         }
      );

      return pivotDataSource;
   }

   eventHandler1(event: any): void {
      var args = event.args;
      var t = new Date();
      var timeString = t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds() + ":" + t.getMilliseconds();

      var eventData = 'Time: ' + timeString + ' Event: ' + event.type + ', pivotItem: ' + args.pivotItem.text;
      if (event.type == 'itemselectionchanged')
         eventData += ', Selected: ' + args.selected;

      eventData += "\r\n";
      this.eventsLog.val(eventData + this.eventsLog.val());
   }

   eventHandler2(event: any): void {
      var t = new Date();
      var timeString = t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds() + ":" + t.getMilliseconds();

      var eventData = 'Time: ' + timeString + ' Event: ' + event.type + ', pivotItem: ' + event.args.pivotItem.text + ', mousebutton: ' + event.args.mousebutton;

      eventData += "\r\n";
      this.eventsLog.val(eventData + this.eventsLog.val());
   }

   eventHandler3(event: any): void {
      var t = new Date();
      var timeString = t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds() + ":" + t.getMilliseconds();

      var eventData = 'Time: ' + timeString + ' Event: ' + event.type + ', pivot row: ' + event.args.pivotRow.text + ', pivot column: ' + event.args.pivotColumn.text + ', mousebutton: ' + event.args.mousebutton;

      eventData += "\r\n";
      this.eventsLog.val(eventData + this.eventsLog.val());
   }

   onClearLog(): void {
      this.eventsLog.val("");
   }
}