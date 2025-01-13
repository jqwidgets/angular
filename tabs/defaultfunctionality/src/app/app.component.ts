import { Component, ViewChild, ViewEncapsulation } from '@angular/core';


import { jqxTabsModule, jqxTabsComponent } from 'jqwidgets-ng/jqxtabs';
@Component({
    selector: 'app-root',
    imports: [jqxTabsModule],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('tabsReference') myTabs: jqxTabsComponent;

    onChangeAnimation(event: any): void {
        let checked = event.args.checked;
        this.myTabs.selectionTracker(checked);
    }
    onChangeContentAnimation(event: any): void {
        let checked = event.args.checked;
        if (checked) {
            this.myTabs.animationType('fade');
        }
        else {
            this.myTabs.animationType('none');
        }
    }
}