import { Component } from '@angular/core';

import { jqxFileUploadModule, jqxFileUploadComponent } from 'jqwidgets-ng/jqxfileupload';
@Component({
    selector: 'app-root',
    imports: [jqxFileUploadModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {

}