import { Component, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';


import { jqxButtonComponent, jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';

import { jqxWindowModule, jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
@Component({
    selector: 'app-root',
    imports: [jqxWindowModule, jqxButtonModule],
    standalone: true,
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('window') window: jqxWindowComponent;

    ngAfterViewInit(): void {
        this.window.focus();
    }

    showWindowButtonClick(): void {
        this.window.open();
    }
}