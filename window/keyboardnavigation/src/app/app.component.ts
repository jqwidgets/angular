import { Component, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { jqxWindowModule, jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent, jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';

@Component({
    selector: 'app-root',
    imports: [jqxWindowModule, jqxButtonModule],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
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
