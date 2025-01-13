import { Component, ViewChild } from '@angular/core';

import { jqxDropDownListModule, jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxRadioButtonComponent, jqxRadioButtonModule } from 'jqwidgets-ng/jqxradiobutton';

@Component({
    selector: 'app-root',
    imports: [jqxDropDownListModule, jqxRadioButtonModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myDropDownList') myDropDownList: jqxDropDownListComponent;

    flag: boolean = false;

    source: any = {
        datatype: 'json',
        datafields: [
            { name: 'CompanyName' },
            { name: 'ContactName' }
        ],
        id: 'id',
        url: '../assets/customers.txt',
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    leftAlignBtnOnChecked(): void {
        this.myDropDownList.dropDownHorizontalAlignment('left');
    };

    // stops initial overwrite
    rightAlignBtnOnChecked(): void {
        if (this.flag)
            this.myDropDownList.dropDownHorizontalAlignment('right');
        this.flag = true;
    };
}

