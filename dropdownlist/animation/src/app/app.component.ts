﻿import { Component, ViewChild } from '@angular/core';

import { jqxDropDownListModule, jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
@Component({
    selector: 'app-root',
    imports: [jqxDropDownListModule],
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
        async: false
    };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    noneAnimationBtnOnChacked() {
        this.myDropDownList.animationType('none');
    };

    slideAnimationBtnOnChacked() {
        this.myDropDownList.animationType('slide');
    };

    // prevents initial overwrite
    fadeAnimationBtnOnChacked() {
        if (this.flag)
            this.myDropDownList.animationType('fade');
        this.flag = true;
    };
}
