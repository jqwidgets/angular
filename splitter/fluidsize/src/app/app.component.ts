import { Component, ViewEncapsulation } from '@angular/core';

import { jqxSplitterModule, jqxSplitterComponent } from 'jqwidgets-ng/jqxsplitter';
@Component({
    selector: 'app-root',
    imports: [jqxSplitterModule],
    standalone: true,
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {

    getWidth(): any {
        if (document.body.offsetWidth < 850) {
            return '90%';
        }

        return 850;
    }


    panels: any[] = [
        { size: '50%', min: '10%', collapsible: false },
        { size: '50%', min: '5%' }
    ];
}