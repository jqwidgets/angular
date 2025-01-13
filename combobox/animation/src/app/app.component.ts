﻿import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { jqxComboBoxModule, jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';
import { jqxRadioButtonComponent, jqxRadioButtonModule } from 'jqwidgets-ng/jqxradiobutton';

@Component({
    selector: 'app-root',
    imports: [jqxComboBoxModule, jqxRadioButtonModule],
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
            url: '../assets/customers.txt'
        };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    noneAnimationOnChecked(): void {
        this.myComboBox.animationType('none');
    };

    slideAnimationOnChecked(): void {
        this.myComboBox.animationType('slide');
    };

    count = 0; //Stops the Overwrite of the animation type on initialization
    fadeAnimationOnChecked(): void {
        if (this.count === 1)
            this.myComboBox.animationType('fade');
        this.count = 1;
    };
}
