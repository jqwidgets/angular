import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { jqxCheckBoxComponent, jqxCheckBoxModule } from 'jqwidgets-ng/jqxcheckbox';
import { jqxRibbonModule, jqxRibbonComponent } from 'jqwidgets-ng/jqxribbon';
@Component({
    selector: 'app-root',
    imports: [jqxRibbonModule, jqxCheckBoxModule],
    standalone: true,
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('jqxRibbon') jqxRibbon: jqxRibbonComponent;

    change(event: any): void {
        let checked = event.args.checked;
        let mode = checked ? "popup" : "default";
        let width = checked ? 115 : 425;

        this.jqxRibbon.setOptions({ width: width, mode: mode });

        if (mode == "popup") {
            this.jqxRibbon.setPopupLayout(0, "default", 310, '100%');
            this.jqxRibbon.setPopupLayout(1, "default", 310, '100%');
            this.jqxRibbon.setPopupLayout(2, "default", 310, '100%');
            this.jqxRibbon.setPopupLayout(3, "default", 310, '100%');
        }
    }
}