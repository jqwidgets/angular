import { Component, ViewChild } from '@angular/core';


import { jqxDateTimeInputModule, jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
@Component({
    selector: 'app-root',
    imports: [jqxDateTimeInputModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myDateTimeInput') myDateTimeInput: jqxDateTimeInputComponent;

    count: number = 0;

    leftBtn(): void {
        this.myDateTimeInput.dropDownHorizontalAlignment('left');
    }

    // unnecessary overwrite in beggining
    rightBtn(): void {
        if (this.count !== 0)
            this.myDateTimeInput.dropDownHorizontalAlignment('right');
        this.count = 1;
    }
}