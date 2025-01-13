import { Component, ViewChild } from '@angular/core';

import { jqxComboBoxModule, jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';
@Component({
    selector: 'app-root',
    imports: [jqxComboBoxModule],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('myComboBox') myComboBox: jqxComboBoxComponent;

    source: any =
        {
            datatype: 'json',
            datafields: [
                { name: 'CompanyName' },
                { name: 'ContactName' }
            ],
            id: 'id',
            url: '../assets/customers.txt',
            async: false
        };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    leftBtnOnChecked(): void {
        this.myComboBox.dropDownHorizontalAlignment('left');
    }

    count = 0; //Stops the Overwrite of the animation type on initialization
    rightBtnOnChecked(): void {
        if (this.count === 1)
            this.myComboBox.dropDownHorizontalAlignment('right');
        this.count = 1;
    }
}
