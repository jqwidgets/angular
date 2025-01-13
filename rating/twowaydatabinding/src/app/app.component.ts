import { Component } from '@angular/core';

import { jqxRatingModule, jqxRatingComponent } from 'jqwidgets-ng/jqxrating';
@Component({
    selector: 'app-root',
    imports: [jqxRatingModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    value: number;
}