import { Component, ViewChild, ElementRef } from '@angular/core';


import { jqxRatingModule, jqxRatingComponent } from 'jqwidgets-ng/jqxrating';
@Component({
    selector: 'app-root',
    imports: [jqxRatingModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('rate') rate: ElementRef;

    change(event: any): void {
        let rate = this.rate.nativeElement;

        rate.innerHTML = '<span> ' + event.value + '</span>';
    }
}