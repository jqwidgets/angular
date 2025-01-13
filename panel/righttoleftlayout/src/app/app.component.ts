import { Component } from '@angular/core';

import { jqxPanelModule, jqxPanelComponent } from 'jqwidgets-ng/jqxpanel';
@Component({
    selector: 'app-root',
    imports: [jqxPanelModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {

}