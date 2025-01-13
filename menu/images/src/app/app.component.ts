import { Component } from '@angular/core';

import { jqxMenuModule, jqxMenuComponent } from 'jqwidgets-ng/jqxmenu';
import { jqxCheckBoxComponent, jqxCheckBoxModule } from 'jqwidgets-ng/jqxcheckbox';

@Component({
    selector: 'app-root',
    imports: [jqxMenuModule, jqxCheckBoxModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
}