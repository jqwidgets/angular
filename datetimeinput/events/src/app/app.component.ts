import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxPanelComponent, jqxPanelModule } from 'jqwidgets-ng/jqxpanel';

import { jqxDateTimeInputModule, jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
@Component({
    selector: 'app-root',
    imports: [jqxDateTimeInputModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('myPanel') myPanel: jqxPanelComponent;

    ngAfterViewInit(): void {
        this.myPanel.elementRef.nativeElement.firstChild.style.border = 'none';
    }

    onValueChanged(event: any): void {
        this.myPanel.clearcontent();
        let date = event.args.date;
        this.myPanel.prepend('<div style="margin-top: 5px;">New Value: ' + date + '</div>');
    }

    onOpen(): void {
        this.myPanel.prepend('<div style="margin-top: 5px;">Popup Opened</div>');
    }

    onClose(): void {
        this.myPanel.prepend('<div style="margin-top: 5px;">Popup Closed</div>');
    }
}