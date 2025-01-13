﻿import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { jqxSplitterModule, jqxSplitterComponent } from 'jqwidgets-ng/jqxsplitter';
import { jqxTreeModule, jqxTreeComponent } from 'jqwidgets-ng/jqxtree';

@Component({
    selector: 'app-root',
    imports: [jqxSplitterModule, jqxTreeModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('jqxTree') jqxTree: jqxTreeComponent;
    @ViewChild('ContentPanel') ContentPanel: ElementRef;

    getWidth(): any {
        if (document.body.offsetWidth < 850) {
            return '90%';
        }

        return 850;
    }


    ngAfterViewInit() {
        this.jqxTree.elementRef.nativeElement.firstChild.style.border = 'none';
    }

    select(event: any): void {
        this.ContentPanel.nativeElement.innerHTML = '<div style="margin: 10px;">' + event.args.element.id + '</div>';
    };
}