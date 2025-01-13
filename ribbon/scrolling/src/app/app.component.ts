import { Component, ViewChild, ViewEncapsulation } from '@angular/core';



import { jqxRibbonModule, jqxRibbonComponent } from 'jqwidgets-ng/jqxribbon';
@Component({
    selector: 'app-root',
    imports: [jqxRibbonModule],
    standalone: true,
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('jqxRibbon') jqxRibbon: jqxRibbonComponent;

    checkedNear(event: any): void {
        this.jqxRibbon.scrollPosition('near');
    }

    checkedFar(event: any): void {
        this.jqxRibbon.scrollPosition('far');
    }

    checkedBoth(event: any): void {
        this.jqxRibbon.scrollPosition('both');
    }
}