﻿import { Component, ViewChild } from '@angular/core';

import { jqxPanelModule, jqxPanelComponent } from 'jqwidgets-ng/jqxpanel';
import { jqxComplexInputModule, jqxComplexInputComponent } from 'jqwidgets-ng/jqxcomplexinput';

@Component({
    selector: 'app-root',
    imports: [jqxComplexInputModule, jqxPanelModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myPanel') myPanel: jqxPanelComponent;

    complexInputOnChange(event: any): void {
        let args = event.args;
        if (args) {
            let value = args.value;
            let oldValue = args.oldValue;
            let realPart = args.realPart;
            let imaginaryPart = args.imaginaryPart;
            this.myPanel.append('<strong>' + event.type + '</strong><br />' +
                'value: ' + value + ', old value: ' + oldValue +
                ',<br /> real part: ' + realPart + ', imaginary part: ' + imaginaryPart + '<br />');
        }
    }
}
