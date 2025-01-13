import { Component, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';


import { jqxPanelComponent, jqxPanelModule } from 'jqwidgets-ng/jqxpanel';
import { jqxButtonComponent, jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxMenuComponent, jqxMenuModule } from 'jqwidgets-ng/jqxmenu';

import { jqxResponsivePanelModule, jqxResponsivePanelComponent } from 'jqwidgets-ng/jqxresponsivepanel';
@Component({
    selector: 'app-root',
    imports: [jqxResponsivePanelModule, jqxMenuModule, jqxPanelModule, jqxButtonModule],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('myResponsivePanel') myResponsivePanel: jqxResponsivePanelComponent;
    @ViewChild('myPanel') myPanel: jqxPanelComponent;
    @ViewChild('container') container: ElementRef;
    @ViewChild('toggleResponsivePanel') toggleResponsivePanel: ElementRef;

    flag: boolean = true;
    responsivePanelEventsHandler(event: any): void {
        if (event.args.element)
            return;
        let collapsed = this.myResponsivePanel.isCollapsed();
        let opened = this.myResponsivePanel.isOpened();

        if (this.flag) {
            collapsed = false;
            opened = false;
        }
        this.flag = false;

        if (!collapsed && !opened) {
            this.myResponsivePanel.elementRef.nativeElement.firstChild.style.display = 'block';
            this.toggleResponsivePanel.nativeElement.style.display = 'none';
        }
        else if (collapsed && opened) {
            this.myPanel.width('65%');
        }
        else if (collapsed && !opened) {
            this.myPanel.width('100%');
            this.myResponsivePanel.elementRef.nativeElement.firstChild.style.display = 'none';
            this.toggleResponsivePanel.nativeElement.style.display = 'block';
        }
        else if (!collapsed && opened) {
            this.myPanel.width('65%');
            this.myResponsivePanel.elementRef.nativeElement.firstChild.style.display = 'block';
            this.toggleResponsivePanel.nativeElement.style.display = 'block';
        }
    }

    resizeSmallBtnOnClick(): void {
        this.myResponsivePanel.elementRef.nativeElement.firstChild.style.display = 'none';
        this.toggleResponsivePanel.nativeElement.style.display = 'block';
        this.container.nativeElement.style.width = '500px';
        this.myPanel.width('100%');
    };

    resizeBigBtnOnClick(): void {
        this.myPanel.width('100%');
        this.myResponsivePanel.elementRef.nativeElement.firstChild.style.display = 'block';
        this.toggleResponsivePanel.nativeElement.style.display = 'none';
        this.container.nativeElement.style.width = '800px';
        this.myPanel.width('65%');
    };
}