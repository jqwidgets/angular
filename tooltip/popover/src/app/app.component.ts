import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { jqxButtonComponent, jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxTooltipModule, jqxTooltipComponent } from 'jqwidgets-ng/jqxtooltip';

@Component({
    selector: 'app-root',
    imports: [jqxTooltipModule, jqxButtonModule],
    standalone: true,
    templateUrl: './app.component.html',
    styles: [`
        jqxTooltip div {
            height: 162px;
        }
    `],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('filmPicture1') myTooltip: jqxTooltipComponent;

    toggle: boolean = false;

    click(): void {
        if (this.toggle == false) {
            this.myTooltip.open();
            this.toggle = true;
        } else {
            this.myTooltip.close();
            this.toggle = false;
        }
    };
}