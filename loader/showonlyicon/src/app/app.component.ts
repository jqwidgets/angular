import { Component, ViewChild } from '@angular/core';

import { jqxButtonComponent, jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxLoaderModule, jqxLoaderComponent } from 'jqwidgets-ng/jqxloader';

@Component({
    selector: 'app-root',
    imports: [jqxLoaderModule, jqxButtonModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('jqxLoader') jqxLoader: jqxLoaderComponent;

    openLoaderClick(event: any): void {
        this.jqxLoader.open();
    };

    closeLoaderClick(event: any): void {
        this.jqxLoader.close();
    };
}