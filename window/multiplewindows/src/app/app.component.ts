import { Component, ViewChild, ElementRef } from '@angular/core';

import { jqxWindowModule, jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';
import { jqxButtonComponent, jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';

@Component({
    selector: 'app-root',
    imports: [jqxWindowModule, jqxButtonModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('mainDemoContainer') mainDemoContainer: ElementRef;

    showWindowButtonClick(): void {
        let windows = document.getElementsByClassName('jqx-window'),
            count = windows.length;

        while (count) {
            count -= 1;
            (<any>$('#' + windows[count].id)).jqxWindow('open');
        }
    }

    count: number = 0;

    addWindowButtonClick(): void {
        this.count += 1;
        //let mainDemoContainer = document.getElementById('mainDemoContainer');
        let widgetContainer = document.createElement('div');
        //let widgetContainer = '<div></div>';


        //this.mainDemoContainer.nativeElement.appendChild(widgetContainer);
        this.mainDemoContainer.nativeElement.appendChild(widgetContainer);

        let newWindow = document.createElement('div');
        let currentWindowID = 'windowNew' + this.count
        newWindow.id = currentWindowID;
        newWindow.innerHTML = '<div>Header ' + this.count + '</div>' +
            '<div>Content of window  ' + this.count + '</div>';
        widgetContainer.appendChild(newWindow);

        jqwidgets.createInstance('#' + currentWindowID, 'jqxWindow', { theme: 'material', height: 150, width: 300 });
    }
}