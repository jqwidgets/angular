import { Component, ViewChild } from '@angular/core';

import { jqxPanelModule, jqxPanelComponent } from 'jqwidgets-ng/jqxpanel';
import { jqxComplexInputModule, jqxComplexInputComponent } from 'jqwidgets-ng/jqxcomplexinput';
import { jqxButtonComponent, jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
 
@Component({
    selector: 'app-root',
    imports: [jqxComplexInputModule, jqxButtonModule, jqxPanelModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myComplexInput') myComplexInput: jqxComplexInputComponent;

    btnOnClick(): void {
        this.myComplexInput.value('11- 2ii');
    }
}
