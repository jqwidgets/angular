﻿import { Component, ViewChild } from '@angular/core';



import { jqxFormattedInputModule, jqxFormattedInputComponent } from 'jqwidgets-ng/jqxformattedinput';
@Component({
    selector: 'app-root',
    imports: [jqxFormattedInputModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myFormattedInput') myFormattedInput: jqxFormattedInputComponent;

    getOctal(): void {
        let octalValue = this.myFormattedInput.val('octal');
        alert('Octal value: ' + octalValue);
    }

    getDecimal(): void {
        let decimalValue = this.myFormattedInput.val('decimal');
        alert('Decimal value: ' + decimalValue);
    }

    getHexadecimal(): void {
        let hexadecimalValue = this.myFormattedInput.val('hexadecimal');
        alert('Hexadecimal value: ' + hexadecimalValue);
    }
}