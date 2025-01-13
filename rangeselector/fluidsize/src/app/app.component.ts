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

    onClickGet(): void {
        let range = this.myRangeSelector.getRange();
        alert("The selected range is from " + range.from + " to " + range.to);
    };

    onClickSet(): void {
        this.myRangeSelector.setRange(30, 70);
    };
}