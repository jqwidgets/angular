import { Component, ViewChild } from '@angular/core';



import { jqxLoaderModule, jqxLoaderComponent } from 'jqwidgets-ng/jqxloader';
@Component({
    selector: 'app-root',
    imports: [jqxLoaderModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('jqxLoader') jqxLoader: jqxLoaderComponent;

    openLoaderClick(event: any): void {
        this.jqxLoader.open();
    };
}