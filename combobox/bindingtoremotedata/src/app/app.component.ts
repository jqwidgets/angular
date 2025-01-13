import { Component, ViewChild, ElementRef } from '@angular/core';

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
    @ViewChild('selectionlog') selectionlog: ElementRef;

    source: any =
        {
            datatype: "jsonp",
            datafields: [
                { name: 'countryName' },
                { name: 'name' },
                { name: 'population', type: 'float' },
                { name: 'continentCode' }
            ],
            url: "https://secure.geonames.org/searchJSON",
            data: {
                featureClass: "P",
                style: "full",
                maxRows: 50,
                username: "jqwidgets"
            }
        };

    dataAdapter: any = new jqx.dataAdapter(this.source);

    myComboBoxOnSelect(event: any): void {
        if (event.args) {
            let item = event.args.item;
            if (item) {
                let valueElement = document.createElement('div');
                valueElement.innerHTML = 'Value: ' + item.value;
                let labelElement = document.createElement('div');
                labelElement.innerHTML = 'Label: ' + item.label;
                let selectionLog = this.selectionlog.nativeElement;
                selectionLog.innerHTML = '';
                selectionLog.appendChild(labelElement);
                selectionLog.appendChild(valueElement);
            }
        }
    };

}
