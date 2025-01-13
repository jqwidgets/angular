import { Component, ViewChild } from '@angular/core';

import { jqxButtonComponent, jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxFormattedInputModule, jqxFormattedInputComponent } from 'jqwidgets-ng/jqxformattedinput';

@Component({
    selector: 'app-root',
    imports: [jqxFormattedInputModule, jqxButtonModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myFormattedInput') myFormattedInput: jqxFormattedInputComponent;

    getDecimal(): void {
        let decimalValue = this.myFormattedInput.val('decimal');
        alert('Decimal Value: ' + decimalValue);
    };

    getExponential(): void {
        let exponentialValue = this.myFormattedInput.val('exponential');
        alert('Exponential Notation: ' + exponentialValue);
    };

    getScientific(): void {
        let scientificValue = this.myFormattedInput.val('scientific');
        alert('Scientific Notation: ' + scientificValue);
    };

    getEngineering(): void {
        let engineeringValue = this.myFormattedInput.val('engineering');
        alert('Engineering Notation: ' + engineeringValue);
    };
}