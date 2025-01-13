import { Component, ViewChild } from '@angular/core';

import { jqxRangeSelectorModule, jqxRangeSelectorComponent } from 'jqwidgets-ng/jqxrangeselector';
@Component({
    selector: 'app-root',
    imports: [jqxRangeSelectorModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('rangeSelector') myRangeSelector: jqxRangeSelectorComponent;
    @ViewChild('jqxRangeSelector') myGrid: jqxRangeSelectorComponent;
    getWidth(): any {
        if (document.body.offsetWidth < 850) {
            return '90%';
        }

        return 850;
    }
    applyFilter = (from, to): void => {
        this.myGrid.clearfilters();
        let filtertype = 'datefilter';
        let filtergroup = new jqx.filter();
        let filter_or_operator = 0;
        let filtervalueFrom = from;
        let filterconditionFrom = 'GREATER_THAN_OR_EQUAL';
        let filterFrom = filtergroup.createfilter(filtertype, filtervalueFrom, filterconditionFrom);
        filtergroup.addfilter(filter_or_operator, filterFrom);
        let filtervalueTo = to;
        let filterconditionTo = 'LESS_THAN_OR_EQUAL';
        let filterTo = filtergroup.createfilter(filtertype, filtervalueTo, filterconditionTo);
        filtergroup.addfilter(filter_or_operator, filterTo);
        this.myGrid.addfilter('year', filtergroup);
        this.myGrid.applyfilters();
    };

    url = "../assets/discoveries.txt";
    source =
        {
            datatype: "json",
            datafields: [
                { name: "discovery", type: "string" },
                { name: "scientist", type: "string" },
                { name: "year", type: "date" }
            ],
            id: "id",
            url: this.url
        };
    dataAdapter = new jqx.dataAdapter(this.source);

    columns: any[] = [
        { text: "Discovery", columngroup: "header", datafield: "discovery", width: 250 },
        { text: "Scientist", columngroup: "header", datafield: "scientist", width: 210 },
        { text: "Year", columngroup: "header", datafield: "year", cellsformat: "yyyy" }
    ];

    columngroups: any[] = [
        { text: "Major scientific discoveries in the 19th century", align: "center", name: "header" }
    ];

    change(event: any): void {
        let range = event.args;
        let min = this.myRangeSelector.min();
        let max = this.myRangeSelector.max();

        min = new Date(min);
        max = new Date(max);

        if (range.from.getTime() == min.getTime() && range.to.getTime() == max.getTime()) {
            this.myGrid.clearfilters();
        } else {
            this.applyFilter(range.from, range.to);
        };
    };
}