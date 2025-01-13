import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { jqxButtonComponent, jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxResponsivePanelModule, jqxResponsivePanelComponent } from 'jqwidgets-ng/jqxresponsivepanel';

@Component({
    selector: 'app-root',
    imports: [jqxResponsivePanelModule, jqxButtonModule],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('myResponsivePanel') myResponsivePanel: jqxResponsivePanelComponent;

    responsivePanelOnCollapse(event: any): void {
        if (event.args.element)
            return;
        this.myResponsivePanel.elementRef.nativeElement.firstChild.style.display = 'block';
    }
}