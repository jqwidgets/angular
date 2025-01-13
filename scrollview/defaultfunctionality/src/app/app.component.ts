import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { jqxButtonComponent, jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxScrollViewModule, jqxScrollViewComponent } from 'jqwidgets-ng/jqxscrollview';

@Component({
    selector: 'app-root',
    imports: [jqxScrollViewModule, jqxButtonModule],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('myScrollView') myScrollView: jqxScrollViewComponent;

    onStartClicked(): void {
        this.myScrollView.slideShow(true);
    };

    onStopClicked(): void {
        this.myScrollView.slideShow(false);
    };
}