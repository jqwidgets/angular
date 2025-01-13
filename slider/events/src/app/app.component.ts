import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { jqxPanelComponent, jqxPanelModule } from 'jqwidgets-ng/jqxpanel';

import { jqxSliderModule, jqxSliderComponent } from 'jqwidgets-ng/jqxslider';
@Component({
    selector: 'app-root',
    imports: [jqxSliderModule, jqxPanelModule],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('events') events: jqxPanelComponent;

    displayEvent = (event) => {
        let eventData = event.type;
        eventData += ': ' + event.args.value;
        this.events.clearcontent();
        this.events.prepend('<div class="item" style="margin-top: 5px;">' + eventData + '</div>');
    };

    change(event: any): void {
        this.displayEvent(event);
    };
}