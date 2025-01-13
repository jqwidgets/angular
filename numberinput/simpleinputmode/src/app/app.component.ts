import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { jqxPanelComponent, jqxPanelModule } from 'jqwidgets-ng/jqxpanel';

import { jqxNumberInputModule, jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';
@Component({
    selector: 'app-root',
    imports: [jqxNumberInputModule],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('Events') Events: jqxPanelComponent;

    change(event: any): void {
        let value = event.args.value;
        this.Events.clearcontent();
        this.Events.prepend('<div style="margin-top: 5px;">Value: ' + value + '</div>');
    };
}