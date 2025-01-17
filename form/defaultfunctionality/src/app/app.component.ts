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
      type: 'button',
      text: 'Sign up',
      width: '90px',
      columnWidth: '50%',
      align: 'right'
    },
    {
      type: 'button',
      text: 'Cancel',
      width: '90px',
      columnWidth: '50%'
    }
  ];

  template: Array<jqwidgets.FormTemplateItem> = [
    {
      bind: 'firstName',
      type: 'text',
      label: 'First name',
      required: true,
      labelWidth: '85px',
      width: '250px',
      info: 'Enter first name',
      infoPosition: 'right'
    },
    {
      bind: 'lastName',
      type: 'text',
      label: 'Last name',
      required: true,
      labelWidth: '85px',
      width: '250px',
      info: 'Enter last name',
      infoPosition: 'right'
    },
    {
      bind: 'company',
      type: 'text',
      label: 'Company',
      required: false,
      labelWidth: '85px',
      width: '250px'
    },
    {
      bind: 'address',
      type: 'text',
      label: 'Address',
      required: true,
      labelWidth: '85px',
      width: '250px'
    },
    {
      bind: 'city',
      type: 'text',
      label: 'City',
      required: true,
      labelWidth: '85px',
      width: '250px'
    },
    {
      bind: 'state',
      type: 'option',
      label: 'State',
      required: true,
      labelWidth: '85px',
      width: '250px',
      component: 'jqxDropDownList',
      options: [
        { value: 'California' },
        { value: 'New York' },
        { value: 'Oregon' },
        { value: 'Illinois' },
        { value: 'Texas' }
      ]
    },
    {
      bind: 'zip',
      type: 'text',
      label: 'Zip code',
      required: true,
      labelWidth: '85px',
      width: '250px'
    },
    {
      type: 'blank',
      rowHeight: '10px'
    },
    {
      columns: this.columns
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