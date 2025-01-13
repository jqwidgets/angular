import { Component, ViewChild, ElementRef } from '@angular/core';

import { jqxScrollbarModule, jqxScrollbarComponent } from 'jqwidgets-ng/jqxscrollbar';
@Component({
    selector: 'app-root',
    imports: [jqxScrollbarModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('HorizontalDiv') HorizontalDiv: ElementRef;

    valueChanged(event: any): void {
        this.HorizontalDiv.nativeElement.innerText = 'Horizontal (' + parseInt(event.currentValue) + ')';
    };
}