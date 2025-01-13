import { Component, ViewChild } from '@angular/core';

import { jqxProgressBarModule, jqxProgressBarComponent } from 'jqwidgets-ng/jqxprogressbar';
@Component({
    selector: 'app-root',
    imports: [jqxProgressBarModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {

}