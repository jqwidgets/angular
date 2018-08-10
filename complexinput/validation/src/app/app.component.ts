import { Component, ViewChild } from '@angular/core';

import { jqxComplexInputComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxcomplexinput.ts';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myComplexInput') myComplexInput: jqxComplexInputComponent;

    btnOnClick(): void {
        this.myComplexInput.value('11- 2ii');
    }
}
