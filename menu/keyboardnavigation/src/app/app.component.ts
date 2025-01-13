import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';



import { jqxMenuModule, jqxMenuComponent } from 'jqwidgets-ng/jqxmenu';
@Component({
    selector: 'app-root',
    imports: [jqxMenuModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('jqxMenu') jqxMenu: jqxMenuComponent;
    @ViewChild('log') log: ElementRef;

    ngAfterViewInit() {
        this.jqxMenu.focus();
    }

    getWidth(): any {
        if (document.body.offsetWidth < 600) {
            return '90%';
        }

        return 600;
    }

    itemclick(event: any): void {
        this.log.nativeElement.innerHTML = "Clicked: " + event.args.innerText;
    };
}