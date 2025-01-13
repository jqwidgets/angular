import { Component, ViewChild, AfterViewInit, OnInit, ElementRef } from '@angular/core';
import { jqxWindowModule, jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxCheckBoxComponent, jqxCheckBoxModule } from 'jqwidgets-ng/jqxcheckbox';
import { jqxButtonComponent, jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxTabsComponent, jqxTabsModule } from 'jqwidgets-ng/jqxtabs';

@Component({
    selector: 'app-root',
    imports: [jqxWindowModule, jqxTabsModule, jqxButtonModule, jqxCheckBoxModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('windowReference') window: jqxWindowComponent;
    @ViewChild('jqxWidget') jqxWidget: ElementRef;

    ngAfterViewInit(): void {
        let offsetLeft = this.jqxWidget.nativeElement.offsetLeft;
        let offsetTop = this.jqxWidget.nativeElement.offsetTop;
        this.window.position({ x: offsetLeft + 50, y: offsetTop + 50 });

        this.window.focus();
    }

    onResizeCheckBox(event: any): void {
        if (event.args.checked) {
            this.window.resizable(true);
        }
        else {
            this.window.resizable(false);
        }
    };

    onDragCheckBox(event: any): void {
        if (event.args.checked) {
            this.window.draggable(true);
        }
        else {
            this.window.draggable(false);
        }
    };

    onShowButton(): void {
        this.window.open();
    };

    onHideButton(): void {
        this.window.close();
    };
}