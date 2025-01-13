import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxFormModule, jqxFormComponent } from 'jqwidgets-ng/jqxform';
@Component({
  selector: 'app-root',
  imports: [jqxFormModule],
  standalone: true,
  templateUrl: 'app.component.html'
})

export class AppComponent implements AfterViewInit {

  ngAfterViewInit(): void {
  }

  columns: Array<jqwidgets.FormTemplateItem> = [
    {
      columnWidth: '150px',
      bind: 'checkboxValue1',
      type: 'boolean',
      label: 'Checkbox 1',
      labelPosition: 'right',
      align: 'left',
      labelPadding: { left: 0, top: 5, right: 0, bottom: 5 }
    },
    {
      columnWidth: '150px',
      bind: 'checkboxValue2',
      type: 'boolean',
      label: 'Checkbox 2',
      labelPosition: 'right',
      align: 'left',
      labelPadding: { left: 0, top: 5, right: 0, bottom: 5 }
    },
    {
      columnWidth: '150px',
      bind: 'checkboxValue3',
      type: 'boolean',
      label: 'Checkbox 3',
      labelPosition: 'right',
      align: 'left',
      labelPadding: { left: 0, top: 5, right: 0, bottom: 5 }
    }
  ];

  template: Array<jqwidgets.FormTemplateItem> = [
    {
      bind: 'textBoxValue',
      type: 'text',
      label: 'Text input',
      labelPosition: 'left',
      labelWidth: '30%',
      align: 'left',
      width: '250px',
      required: true
    },
    {
      bind: 'passwordBoxValue',
      type: 'password',
      label: 'Password input',
      labelPosition: 'left',
      labelWidth: '30%',
      align: 'left',
      width: '250px',
      required: true
    },
    {
      bind: 'nubmberBoxValue',
      type: 'number',
      label: 'Number input',
      labelPosition: 'left',
      labelWidth: '30%',
      align: 'left',
      width: '250px',
      required: true
    },
    {
      bind: 'datetimeBoxValue',
      type: 'datetime',
      label: 'Date & time input',
      labelPosition: 'left',
      labelWidth: '30%',
      align: 'left',
      width: '250px',
      required: true
    },
    {
      bind: 'timeBoxValue',
      type: 'time',
      label: 'Time input',
      labelPosition: 'left',
      labelWidth: '30%',
      align: 'left',
      width: '250px',
      required: true
    },
    {
      bind: 'dateBoxValue',
      type: 'date',
      label: 'Date input',
      labelPosition: 'left',
      labelWidth: '30%',
      align: 'left',
      width: '250px',
      required: true
    },
    {
      bind: 'dropdownValue',
      type: 'option',
      label: 'Drop down list',
      labelPosition: 'left',
      labelWidth: '30%',
      align: 'left',
      width: '250px',
      required: true,
      component: 'jqxDropDownList',
      options: [
        { label: 'Option 1', value: 'value1' },
        { label: 'Option 2', value: 'value2' },
        { label: 'Option 3', value: 'value3' }
      ]
    },
    {
      type: 'label',
      label: 'Radio buttons:',
      rowHeight: '40px',
    },
    {
      bind: 'radiobuttonValue',
      type: 'option',
      label: 'Radio buttons',
      labelPosition: 'right',
      columnWidth: '150px',
      align: 'left',
      //width: '15px',
      //required: true,
      optionsLayout: 'horizontal',
      options: [
        { label: 'Option 1', value: 'value1' },
        { label: 'Option 2', value: 'value2' },
        { label: 'Option 3', value: 'value3' }
      ]
    },
    {
      type: 'label',
      bind: 'radiobuttonValue_out',
      label: 'Boolean options / checkboxes:',
      rowHeight: '40px',
    },
    {
      columns: this.columns
    }
  ];

  sampleValue: any = {
    'textBoxValue': 'text box value',
    'passwordBoxValue': 'password box',
    'nubmberBoxValue': 67.44,
    'datetimeBoxValue': '2025-06-01 14:05:23',
    'timeBoxValue': '2025-07-01 11:05:23',
    'dateBoxValue': '2025-07-04 15:05:23',
    'dropdownValue': 'value3',
    'radiobuttonValue': 'value2',
    'checkboxValue1': false,
    'checkboxValue2': false,
    'checkboxValue3': true
  };

}