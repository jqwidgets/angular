import { Component, ViewChild } from '@angular/core';
import { jqxRangeSelectorModule, jqxRangeSelectorComponent } from 'jqwidgets-ng/jqxrangeselector';
import { jqxButtonComponent, jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';

@Component({
    selector: 'app-root',
    imports: [jqxRangeSelectorModule, jqxButtonModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('rangeSelectorReference') myRangeSelector: jqxRangeSelectorComponent;

    getWidth(): any {
        if (document.body.offsetWidth < 700) {
            return '90%';
        }

        return 700;
    }

    onClickGet(): void {
        // Get Range.
        let range = this.myRangeSelector.getRange();
        alert("The selected range is from " + range.from + " to " + range.to);
    };

    onClickSet(): void {
        // Set Range.
        this.myRangeSelector.setRange(30, 70);
    };
}