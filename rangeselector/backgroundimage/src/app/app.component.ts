import { Component, ViewChild, ViewEncapsulation, ElementRef } from '@angular/core';
import { jqxRangeSelectorModule, jqxRangeSelectorComponent } from 'jqwidgets-ng/jqxrangeselector';
import { jqxButtonComponent, jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';

@Component({
    selector: 'app-root',
    imports: [jqxRangeSelectorModule, jqxButtonModule],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('rangeSelector') rangeSelector: jqxRangeSelectorComponent;
    @ViewChild('result') result: ElementRef;

    min: Date = new Date(2024, 5, 1);
    max: Date = new Date(2024, 9, 1);
    range: any = { from: new Date(2024, 5, 1), to: new Date(2024, 6, 29), min: { days: 7 } };

    getWidth(): any {
        if (document.body.offsetWidth < 500) {
            return '90%';
        }

        return 500;
    }

    onClickSubmit(): void {
        let months = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
        let range = this.rangeSelector.getRange();

        let from = new Date(range.from.toString());
        let to = new Date(range.to.toString());

        let fromDate = from.getDate();
        let fromMonth = from.getMonth();
        let toDate = to.getDate();
        let toMonth = to.getMonth();

        this.result.nativeElement.innerHTML = "Vacation period selected: from " + months[fromMonth] + " " + fromDate + " to " + months[toMonth] + " " + toDate;
    }
}