﻿import { Component, ViewChild, ElementRef } from '@angular/core';



import { jqxTreeGridModule, jqxTreeGridComponent } from 'jqwidgets-ng/jqxtreegrid';
@Component({
    selector: 'app-root',
    imports: [jqxTreeGridModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myLog') myLog: ElementRef;

    getWidth(): any {
        if (document.body.offsetWidth < 850) {
            return '90%';
        }

        return 850;
    }

    employees: any[] = [
        {
            'EmployeeID': 2, 'FirstName': 'Andrew', 'LastName': 'Fuller', 'Country': 'USA', 'Title': 'Vice President, Sales', 'HireDate': '1992-08-14 00:00:00', 'BirthDate': '1952-02-19 00:00:00', 'City': 'Tacoma', 'Address': '908 W. Capital Way', 'expanded': 'true',
            children: [
                { 'EmployeeID': 8, 'FirstName': 'Laura', 'LastName': 'Callahan', 'Country': 'USA', 'Title': 'Inside Sales Coordinator', 'HireDate': '1994-03-05 00:00:00', 'BirthDate': '1958-01-09 00:00:00', 'City': 'Seattle', 'Address': '4726 - 11th Ave. N.E.' },
                { 'EmployeeID': 1, 'FirstName': 'Nancy', 'LastName': 'Davolio', 'Country': 'USA', 'Title': 'Sales Representative', 'HireDate': '1992-05-01 00:00:00', 'BirthDate': '1948-12-08 00:00:00', 'City': 'Seattle', 'Address': '507 - 20th Ave. E.Apt. 2A' },
                { 'EmployeeID': 3, 'FirstName': 'Janet', 'LastName': 'Leverling', 'Country': 'USA', 'Title': 'Sales Representative', 'HireDate': '1992-04-01 00:00:00', 'BirthDate': '1963-08-30 00:00:00', 'City': 'Kirkland', 'Address': '722 Moss Bay Blvd.' },
                { 'EmployeeID': 4, 'FirstName': 'Margaret', 'LastName': 'Peacock', 'Country': 'USA', 'Title': 'Sales Representative', 'HireDate': '1993-05-03 00:00:00', 'BirthDate': '1937-09-19 00:00:00', 'City': 'Redmond', 'Address': '4110 Old Redmond Rd.' },
                {
                    'EmployeeID': 5, 'FirstName': 'Steven', 'LastName': 'Buchanan', 'Country': 'UK', 'Title': 'Sales Manager', 'HireDate': '1993-10-17 00:00:00', 'BirthDate': '1955-03-04 00:00:00', 'City': 'London', 'Address': '14 Garrett Hill', 'expanded': 'true',
                    children: [
                        { 'EmployeeID': 6, 'FirstName': 'Michael', 'LastName': 'Suyama', 'Country': 'UK', 'Title': 'Sales Representative', 'HireDate': '1993-10-17 00:00:00', 'BirthDate': '1963-07-02 00:00:00', 'City': 'London', 'Address': 'Coventry House Miner Rd.' },
                        { 'EmployeeID': 7, 'FirstName': 'Robert', 'LastName': 'King', 'Country': 'UK', 'Title': 'Sales Representative', 'HireDate': '1994-01-02 00:00:00', 'BirthDate': '1960-05-29 00:00:00', 'City': 'London', 'Address': 'Edgeham Hollow Winchester Way' },
                        { 'EmployeeID': 9, 'FirstName': 'Anne', 'LastName': 'Dodsworth', 'Country': 'UK', 'Title': 'Sales Representative', 'HireDate': '1994-11-15 00:00:00', 'BirthDate': '1966-01-27 00:00:00', 'City': 'London', 'Address': '7 Houndstooth Rd.' }
                    ]
                }
            ]
        }
    ];

    source: any =
        {
            dataType: 'json',
            dataFields: [
                { name: 'EmployeeID', type: 'number' },
                { name: 'FirstName', type: 'string' },
                { name: 'LastName', type: 'string' },
                { name: 'Country', type: 'string' },
                { name: 'City', type: 'string' },
                { name: 'Address', type: 'string' },
                { name: 'Title', type: 'string' },
                { name: 'HireDate', type: 'date' },
                { name: 'children', type: 'array' },
                { name: 'expanded', type: 'bool' },
                { name: 'BirthDate', type: 'date' }
            ],
            hierarchy:
            {
                root: 'children'
            },
            id: 'EmployeeID',
            localData: this.employees
        };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    columns: any[] =
        [
            { text: 'FirstName', dataField: 'FirstName', width: 200 },
            { text: 'LastName', dataField: 'LastName', width: 200 },
            { text: 'City', dataField: 'City', width: 200 },
            { text: 'Country', dataField: 'Country' }
        ];

    editSettings: any =
        {
            saveOnPageChange: true, saveOnBlur: true, saveOnSelectionChange: true,
            cancelOnEsc: true, saveOnEnter: true, editSingleCell: true, editOnDoubleClick: true, editOnF2: true
        };

    treeGridOnCellBeginEdit(event: any): void {
        let args = event.args;
        // row key
        let rowKey = args.key;
        // row's data.
        let rowData = args.row;
        // column's data field.
        let columnDataField = args.dataField;
        // column's display field.
        let columnDisplayField = args.displayField;
        // cell's value.
        let value = args.value;
        if (columnDataField == 'ShippedDate')
            value = this.dataAdapter.formatDate(value, 'dd/MM/yyyy');
        let myLog = this.myLog.nativeElement;
        myLog.innerHTML = 'cellBeginEdit - Row ID: ' + rowKey + ', Column: ' + columnDataField + ', Value: ' + value + '<br/>' + myLog.innerHTML;
    }

    treeGridOnCellEndEdit(event: any): void {
        let args = event.args;
        // row key
        let rowKey = args.key;
        // row's data.
        let rowData = args.row;
        // column's data field.
        let columnDataField = args.dataField;
        // column's display field.
        let columnDisplayField = args.displayField;
        // cell's value.
        let value = args.value;
        if (columnDataField == 'ShippedDate')
            value = this.dataAdapter.formatDate(value, 'dd/MM/yyyy');
        let myLog = this.myLog.nativeElement
        myLog.innerHTML = '<br/>cellEndEdit - Row ID: ' + rowKey + ', Column: ' + columnDataField + ', Value: ' + value + '<br/>' + myLog.innerHTML;
    }
}