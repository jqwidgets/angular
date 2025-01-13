import { Component, ViewChild } from '@angular/core';

import { jqxMaskedInputModule, jqxMaskedInputComponent } from 'jqwidgets-ng/jqxmaskedinput';
import { jqxButtonComponent, jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';

@Component({
    selector: 'app-root',
    imports: [jqxMaskedInputModule, jqxButtonModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('numericInput') myNumericInput: jqxMaskedInputComponent;
    @ViewChild('zipCodeInput') myZipCodeInput: jqxMaskedInputComponent;
    @ViewChild('ssnInput') mySsnInput: jqxMaskedInputComponent;
    @ViewChild('phoneInput') myPhoneInput: jqxMaskedInputComponent;
    @ViewChild('regexInput') myRegexInput: jqxMaskedInputComponent;
    @ViewChild('disabledInput') myDisabledInput: jqxMaskedInputComponent;

    clear(): void {
        this.myNumericInput.clear();
        this.myZipCodeInput.clear();
        this.mySsnInput.clear();
        this.myPhoneInput.clear();
        this.myRegexInput.clear();
        this.myDisabledInput.clear();
    }
}