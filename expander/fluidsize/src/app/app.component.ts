import { Component, ViewEncapsulation } from '@angular/core';

import { jqxExpanderModule, jqxExpanderComponent } from 'jqwidgets-ng/jqxgrid';
@Component({
    selector: 'app-root',
    imports: [jqxExpanderModule],
    standalone: true,
    templateUrl: './app.component.html'
})


export class AppComponent {

}