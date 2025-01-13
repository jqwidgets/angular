import { Component, ViewChild } from '@angular/core';

import { jqxDateTimeInputModule, jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxRadioButtonComponent, jqxRadioButtonModule } from 'jqwidgets-ng/jqxradiobutton';

@Component({
    selector: 'app-root',
    imports: [jqxDateTimeInputModule, jqxRadioButtonModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myDateTimeInput') myDateTimeInput: jqxDateTimeInputComponent;

    count: number = 0;

    noneAnimationBtn() {
        this.myDateTimeInput.animationType('none');
    }

    slideAnimationBtn() {
        this.myDateTimeInput.animationType('slide');
    }

    // avoids unnecessary overwrite in the beggining
    fadeAnimationBtn() {
        if (this.count !== 0)
            this.myDateTimeInput.animationType('fade');
        this.count = 1;
    }
}