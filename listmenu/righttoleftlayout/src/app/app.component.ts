import { Component } from '@angular/core';

import { jqxListMenuModule, jqxListMenuComponent } from 'jqwidgets-ng/jqxlistmenu';
@Component({
    selector: 'app-root',
    imports: [jqxListMenuModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
}