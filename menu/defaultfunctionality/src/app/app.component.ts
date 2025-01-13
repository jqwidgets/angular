﻿import { Component, ViewChild, ElementRef } from '@angular/core';

import { jqxCheckBoxComponent, jqxCheckBoxModule } from 'jqwidgets-ng/jqxcheckbox';
import { jqxMenuModule, jqxMenuComponent } from 'jqwidgets-ng/jqxmenu';
@Component({
    selector: 'app-root',
    imports: [jqxMenuModule, jqxCheckBoxModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('menuReference') myMenu: jqxMenuComponent;

    getWidth(): any {
        if (document.body.offsetWidth < 600) {
            return '90%';
        }

        return 600;
    }

    animationOnChange(event: any): void {
        let value = event.args.checked;
        // enable or disable the menu's animation.
        if (!value) {
            this.myMenu.setOptions
                ({
                    animationShowDuration: 0,
                    animationHideDuration: 0,
                    animationShowDelay: 0
                });
        }
        else {
            this.myMenu.setOptions
                ({
                    animationShowDuration: 300,
                    animationHideDuration: 200,
                    animationShowDelay: 200
                });
        }
    }
    disabledOnChange(event: any): void {
        let value = event.args.checked;
        // enable or disable the menu
        if (!value) {
            this.myMenu.disabled(false);
        }
        else {
            this.myMenu.disabled(true);
        }
    }
    hoverOnChange(event: any): void {
        let value = event.args.checked;
        // enable or disable the menu's hover effect.
        if (!value) {
            this.myMenu.enableHover(false);
        }
        else {
            this.myMenu.enableHover(true);
        }
    }
    openOnChange(event: any): void {
        let value = event.args.checked;
        // enable or disable the opening of the top level menu items when the user hovers them.
        if (!value) {
            this.myMenu.autoOpen(false);
        }
        else {
            this.myMenu.autoOpen(true);
        }
    }
    topLevelArrowsOnChange(event: any): void {
        let value = event.args.checked;
        // enable or disable the top level arrows.
        if (!value) {
            this.myMenu.showTopLevelArrows(false);
        }
        else {
            this.myMenu.showTopLevelArrows(true);
        }
    }
}