﻿import { Component, ViewChild } from '@angular/core';


import { jqxMenuComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxmenu.ts';

import { jqxTreeModule, jqxTreeComponent } from 'jqwidgets-ng/jqxtree';
@Component({
    selector: 'app-root',
    imports: [jqxTreeModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myTree') myTree: jqxTreeComponent;
    @ViewChild('myMenu') myMenu: jqxMenuComponent;

    myTreeOnInitialized(): void {
        this.myTree.selectItem(document.getElementById('home'));
        this.myTree.expandItem(document.getElementById('solutions'));

        document.addEventListener('contextmenu', event => {
            event.preventDefault();
            if ((<Element>event.target).classList.contains('jqx-tree-item')) {
                this.myTree.selectItem(event.target.parentNode);
                let scrollTop = window.scrollY;
                let scrollLeft = window.scrollX;
                this.myMenu.open(event.clientX + 5 + scrollLeft, event.clientY + 5 + scrollTop);
                return false;
            } else {
                this.myMenu.close();
            }
        });
    }

    myMenuOnItemClick(event: any): void {
        let item = event.args.innerText;
        let selectedItem = null;
        switch (item) {
            case "Add Item":
                selectedItem = this.myTree.getSelectedItem();
                if (selectedItem != null) {
                    this.myTree.addTo({ label: 'Item' }, selectedItem.element);
                }
                break;
            case "Remove Item":
                selectedItem = this.myTree.getSelectedItem();
                if (selectedItem != null) {
                    this.myTree.removeItem(selectedItem.element);
                }
                break;
        }
    };
}