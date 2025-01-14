import { Component, ViewChild } from '@angular/core';

import { jqxPanelModule, jqxPanelComponent } from 'jqwidgets-ng/jqxpanel';
import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxFileUploadModule, jqxFileUploadComponent } from 'jqwidgets-ng/jqxfileupload';

@Component({
    selector: 'app-root',
    imports: [jqxFileUploadModule, jqxPanelModule, jqxButtonModule],
    standalone: true,
    templateUrl: './app.component.html'
})


export class AppComponent {

}