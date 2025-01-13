import { Component, ViewEncapsulation } from '@angular/core';

import { jqxEditorModule, jqxEditorComponent } from 'jqwidgets-ng/jqxeditor';
@Component({
    selector: 'app-root',
    imports: [jqxEditorModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {

}