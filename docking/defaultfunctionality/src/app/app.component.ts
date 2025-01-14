import { Component } from '@angular/core';

import { jqxDockingModule, jqxDockingComponent } from 'jqwidgets-ng/jqxdocking';
import { jqxListboxModule } from 'jqwidgets-ng/jqxlistbox';
import { jqxTabsModule } from 'jqwidgets-ng/jqxtabs';
import { jqxCalendarModule } from 'jqwidgets-ng/jqxcalendar';
import { jqxPanelModule } from 'jqwidgets-ng/jqxpanel';

@Component({
    selector: 'app-root',
    imports: [jqxDockingModule, jqxPanelModule, jqxCalendarModule, jqxTabsModule, jqxListboxModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {

    getWidth(): any {
        if (document.body.offsetWidth < 650) {
            return '90%';
        }

        return 650;
    }


    source: string[] =
        [
            'JavaScript Certification - Welcome to our network',
            'Business Challenges via Web take a part',
            'jQWidgets better web, less time. Take a tour',
            'Facebook - you have 7 new notifications',
            'Twitter - John Doe is following you. Look at his profile',
            'New videos, take a look at YouTube.com'
        ];
}
