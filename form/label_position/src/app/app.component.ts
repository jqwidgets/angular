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

  template: Array<jqwidgets.FormTemplateItem> = [
    {
      bind: 'item1',
      type: 'text',
      label: 'Label position left',
      labelPosition: 'left',
      align: 'left',
      width: '200px',
      required: true
    },
    {
      bind: 'item2',
      type: 'text',
      label: 'Label position right',
      labelPosition: 'right',
      align: 'left',
      width: '200px',
      required: true,
      requiredPosition: 'left'
    },
    {
      bind: 'item3',
      type: 'text',
      label: 'Label position top',
      labelPosition: 'top',
      align: 'left',
      width: '200px',
      required: true
    },
    {
      bind: 'item4',
      type: 'text',
      label: 'Label position bottom',
      labelPosition: 'bottom',
      labelAlign: 'left',
      width: '200px',
      required: true
    }
  ];

  sampleValue: any = {
    firstName: 'John',
    lastName: 'Scott',
    address: '1st Ave SW',
    city: 'San Antonio',
    state: 'Texas',
    zip: '78209'
  };
}