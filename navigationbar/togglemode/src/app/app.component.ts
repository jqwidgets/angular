import { Component } from '@angular/core';

import { jqxNavigationBarModule, jqxNavigationBarComponent } from 'jqwidgets-ng/jqxnavigationbar';
@Component({
    selector: 'app-root',
    imports: [jqxNavigationBarModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
}