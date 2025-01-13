import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxCheckBoxComponent, jqxCheckBoxModule } from 'jqwidgets-ng/jqxcheckbox';
import { jqxMenuModule, jqxMenuComponent } from 'jqwidgets-ng/jqxmenu';
@Component({
    selector: 'app-root',
    imports: [jqxMenuModule, jqxCheckBoxModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('jqxMenu') jqxMenu: jqxMenuComponent;
    @ViewChild('minimizeCheckbox') myCheckBox: jqxCheckBoxComponent;

    ngAfterViewInit() {
        this.jqxMenu.minimize();
    }

    change(event: any): void {
        if (this.myCheckBox.val()) {
            this.jqxMenu.minimize();
        }
        else {
            this.jqxMenu.restore();
        }
    };
}