﻿import { Component, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';

import { jqxSortableModule, jqxSortableComponent } from 'jqwidgets-ng/jqxsortable';

@Component({
    selector: 'app-root',
    imports: [jqxSortableModule],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit {
    @ViewChild('mySortable') mySortable: jqxSortableComponent;

    ngAfterViewInit(): void {
        this.loadInfo();
    }

    loadInfo(): void {
        let firstNames = ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven'];
        let lastNames = ['Davolio', 'Fuller', 'Leverling', 'Peacock', 'Buchanan'];
        let titles = ['Sales Representative', 'Vice President, Sales', 'Sales Representative', 'Sales Representative', 'Sales Manager'];
        for (let i = 0; i < firstNames.length; i++) {
            let element = document.createElement('div');
            let imgurl = 'https://www.jqwidgets.com/angular/images/' + firstNames[i].toLowerCase() + '.png';
            let img = '<img height="50" width="40" src="' + imgurl + '"/>';
            element.innerHTML = '<table style="min-width: 130px;"><tr><td style="width: 40px;" rowspan="2">' + img + '</td><td>' + firstNames[i] + ' ' + lastNames[i] + '</td></tr><tr><td>' + titles[i] + '</td></tr></table>';
            this.mySortable.elementRef.nativeElement.firstElementChild.appendChild(element);
        }
    };
}