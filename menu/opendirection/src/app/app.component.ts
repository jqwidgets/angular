import { Component, ViewChild, AfterViewInit } from '@angular/core';



import { jqxMenuModule, jqxMenuComponent } from 'jqwidgets-ng/jqxmenu';
@Component({
    selector: 'app-root',
    imports: [jqxMenuModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('myMenu') myMenu: jqxMenuComponent

    ngAfterViewInit(): void {
        this.myMenu.setItemOpenDirection('Services', 'left', 'up');
        this.myMenu.setItemOpenDirection('ContactUs', 'left', 'down');
    }
}