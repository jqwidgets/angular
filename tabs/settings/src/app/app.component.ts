import { Component, ViewChild } from '@angular/core';


import { jqxTabsModule, jqxTabsComponent } from 'jqwidgets-ng/jqxtabs';
import { jqxButtonComponent, jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';

@Component({
    selector: 'app-root',
    imports: [jqxTabsModule, jqxButtonModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('jqxTabs') jqxTabs: jqxTabsComponent;

    clickAdd(): void {
        this.jqxTabs.addLast('Sample title', 'Sample content');
        this.jqxTabs.ensureVisible(-1);
    };

    clickRemove(): void {
        let selectedItem = this.jqxTabs.selectedItem();
        let disabledItems = this.jqxTabs.getDisabledTabsCount();
        let items = this.jqxTabs.length();
        if (items > disabledItems + 1) {
            this.jqxTabs.removeAt(selectedItem);
        }
    };

    clickDisable(): void {
        let selectedItem = this.jqxTabs.selectedItem();
        this.jqxTabs.disableAt(selectedItem);
    };

    clickEnable(): void {
        let selectedItem = this.jqxTabs.selectedItem();
        this.jqxTabs.enableAt(selectedItem);
    };

    clickEnableAll(): void {
        this.jqxTabs.enable();
    };

    clickDisableAll(): void {
        this.jqxTabs.disable();
    };
}