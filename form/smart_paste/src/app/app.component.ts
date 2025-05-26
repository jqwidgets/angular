import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

import { jqxFormModule, jqxFormComponent } from 'jqwidgets-ng/jqxform';
@Component({
  selector: 'app-root',
  imports: [jqxFormModule],
  standalone: true,
  templateUrl: 'app.component.html'
})

export class AppComponent implements AfterViewInit {
  @ViewChild('formEvents') formEvents: ElementRef;

  ngAfterViewInit(): void {
  }

  columns: Array<jqwidgets.FormTemplateItem> = [
    {
      columnWidth: '140px',
      bind: 'checkboxValue1',
      type: 'boolean',
      label: 'Checkbox 1',
      labelPosition: 'right',
      align: 'left',
      labelPadding: { left: 0, top: 5, right: 0, bottom: 5 }
    },
    {
      columnWidth: '140px',
      bind: 'checkboxValue2',
      type: 'boolean',
      label: 'Checkbox 2',
      labelPosition: 'right',
      align: 'left',
      labelPadding: { left: 0, top: 5, right: 0, bottom: 5 }
    },
    {
      columnWidth: '140px',
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
                    bind: 'firstName',
                    type: 'text',
                    label: 'First name',
                    required: true,
                    labelWidth: '80px',
                    width: '250px',
                    info: 'Enter first name',
                    infoPosition: 'right'
                },
                {
                    bind: 'lastName',
                    type: 'text',
                    label: 'Last name',
                    required: true,
                    labelWidth: '80px',
                    width: '250px',
                    info: 'Enter last name'
                },
                {
                    bind: 'company',
                    type: 'text',
                    label: 'Company',
                    required: false,
                    labelWidth: '80px',
                    width: '250px'
                },
                {
                    bind: 'address',
                    type: 'text',
                    label: 'Address',
                    required: true,
                    labelWidth: '80px',
                    width: '250px'
                },
                {
                    bind: 'city',
                    type: 'text',
                    label: 'City',
                    required: true,
                    labelWidth: '80px',
                    width: '250px'
                },
                {
                    bind: 'state',
                    type: 'option',
                    label: 'State',
                    required: true,
                    labelWidth: '80px',
                    width: '250px',
                    component: 'jqxDropDownList',
                    options: [
                        { value: 'CA' },
                        { value: 'NY' },
                        { value: 'OR' },
                        { value: 'IL' },
                        { value: 'TX' }
                    ]
                },
                {
                    bind: 'zip',
                    type: 'text',
                    label: 'Zip code',
                    required: true,
                    labelWidth: '80px',
                    width: '250px'
                },
                {
                    type: 'blank',
                    rowHeight: '10px'
                },
                {
                    columns: [
                        {
                            type: 'button',
                            text: 'Sign up',
                            width: '90px',
                            height: '30px',
                            rowHeight: '40px',
                            columnWidth: '50%',
                            align: 'right'
                        },
                        {
                            type: 'button',
                            text: 'Cancel',
                            width: '90px',
                            height: '30px',
                            rowHeight: '40px',
                            columnWidth: '50%'
                        }
                    ]
                }
  ];

  sampleValue: any = {
	    firstName: 'John',
		lastName: 'Scott',
		address: '1st Ave SW',
		company: 'N/A',
		city: 'San Antonio',
		state: 'Texas',
		zip: '78209'
  };

  formEventHandler(event: any): any {
    var args = event.args;
    var newValue = args.value;
    var previousValue = args.previousValue;

    var html = '<h3>Event: formdatachange</h3>';
    for (var i in newValue) {
      var newInputValue = newValue[i];

      var previousInputValue = '';
      if (previousValue && previousValue[i] !== undefined && previousValue[i] !== newValue[i]) {
        previousInputValue = ', <i>previous value</i>: <span style="color:red;">' + previousValue[i] + '</span>';
        newInputValue = '<span style="color:green;">' + newInputValue + '</span>';
      }

      html += "<b>" + i + "</b>: " + newInputValue + previousInputValue + "<br>";
    }

    this.formEvents.nativeElement.innerHTML = html;
  };
}