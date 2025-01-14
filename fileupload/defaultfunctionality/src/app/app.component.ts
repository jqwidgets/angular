import { Component } from '@angular/core';

import { jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxFileUploadModule, jqxFileUploadComponent } from 'jqwidgets-ng/jqxfileupload';

@Component({
    selector: 'app-root',
    imports: [jqxFileUploadModule, jqxButtonModule],
    standalone: true,
    templateUrl: './app.component.html'
})


export class AppComponent {

}