import { Component, ViewChild } from '@angular/core';

import { jqxPasswordInputModule, jqxPasswordInputComponent } from 'jqwidgets-ng/jqxpasswordinput';
@Component({
    selector: 'app-root',
    imports: [jqxPasswordInputModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    localization: any = {
        showPasswordString: "צג סיסמא",
        hidePasswordString: "סתר סיסמא",
        passwordStrengthString: "חוזק סיסמא",
        tooShort: "קצר מדי",
        weak: "חלש", fair: "הוגן",
        good: "טוב", strong: "חזק"
    };
}