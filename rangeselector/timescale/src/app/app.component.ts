import { Component } from '@angular/core';

import { jqxRangeSelectorModule, jqxRangeSelectorComponent } from 'jqwidgets-ng/jqxrangeselector';
@Component({
    selector: 'app-root',
    imports: [jqxRangeSelectorModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    min: Date = new Date(2024, 5, 1, 0, 0, 0);
    max: Date = new Date(2024, 5, 1, 24, 0, 0);
    range: any = { from: new Date(2024, 5, 1, 4, 0, 0), to: new Date(2024, 5, 1, 12, 0, 0) };
    majorTicksInterval: any = { hours: 4 };
    minorTicksInterval: any = { minutes: 30 };
    labelsFormat: string = 'hh:mm tt';
    markersFormat: string = 'hh:mm tt';

    getWidth(): any {
        if (document.body.offsetWidth < 750) {
            return '90%';
        }

        return 750;
    }
}