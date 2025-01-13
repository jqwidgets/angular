import { Component, ViewChild } from '@angular/core';

import { jqxWindowComponent, jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
import { jqxEditorModule, jqxEditorComponent } from 'jqwidgets-ng/jqxeditor';
import { jqxButtonComponent, jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';

@Component({
    selector: 'app-root',
    imports: [jqxEditorModule, jqxButtonModule, jqxWindowModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myWindow') myWindow: jqxWindowComponent;

    btnOnClick(): void {
        this.myWindow.open();
    }
}