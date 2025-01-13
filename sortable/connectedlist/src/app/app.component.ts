﻿import { Component, OnInit, AfterViewInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { jqxSortableModule, jqxSortableComponent } from 'jqwidgets-ng/jqxsortable';

@Component({
    selector: 'app-root',
    imports: [jqxSortableModule],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit, AfterViewInit {
    @ViewChild('mySortable1') mySortable1: jqxSortableComponent;
    @ViewChild('mySortable2') mySortable2: jqxSortableComponent;

    ngOnInit(): void {
        const firstNames = ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven', 'Michael', 'Robert', 'Laura', 'Anne'];

        const lastNames = ['Davolio', 'Fuller', 'Leverling', 'Peacock', 'Buchanan', 'Suyama', 'King', 'Callahan', 'Dodsworth'];

        const titles = ['Sales Representative', 'Vice President, Sales', 'Sales Representative', 'Sales Representative', 'Sales Manager', 'Sales Representative', 'Sales Representative', 'Inside Sales Coordinator', 'Sales Representative'];

        const firstNamesLength = firstNames.length;

        const firstNamesHalf = Math.floor(firstNamesLength / 2);

        let sortableList1 = '';
        let sortableList2 = '';

        for (let i = 0; i < firstNames.length; i++) {
            let imgurl = 'https://www.jqwidgets.com/angular/images/' + firstNames[i].toLowerCase() + '.png';

            let img = '<img height="50" width="40" src="' + imgurl + '"/>';

            let element = '<div><table style="min-width: 130px;"><tr><td style="width: 40px;" rowspan="2">' + img + '</td><td>' + firstNames[i] + ' ' + lastNames[i] + '</td></tr><tr><td>' + titles[i] + '</td></tr></table></div>';

            if (i < firstNamesHalf) {
                sortableList1 = sortableList1 + element;
            } else {
                sortableList2 = sortableList2 + element;
            }
        }

        const sortable1 = this.mySortable1.elementRef.nativeElement.firstChild;
        const sortable2 = this.mySortable2.elementRef.nativeElement.firstChild;

        sortable1.classList.add('sortable');
        sortable2.classList.add('sortable');

        sortable1.innerHTML = sortableList1;
        sortable2.innerHTML = sortableList2;
    }

    ngAfterViewInit(): void {
        const options = { connectWith: '.sortable', opacity: 0.5 };

        this.mySortable1.createComponent(options);
        this.mySortable2.createComponent(options);
    }
}