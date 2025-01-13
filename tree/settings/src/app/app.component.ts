﻿import { Component, ViewChild } from '@angular/core';



import { jqxTreeModule, jqxTreeComponent } from 'jqwidgets-ng/jqxtree';
import { jqxButtonComponent, jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';

@Component({
    selector: 'app-root',
    imports: [jqxTreeModule, jqxButtonModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myTree') myTree: jqxTreeComponent;

    myTreeOnInitialized(): void {
        this.myTree.selectItem(document.getElementById('home'));
        this.myTree.expandItem(document.getElementById('solutions'));
    }

    AddOnClick(): void {
        let selectedItem = this.myTree.getSelectedItem();
        if (selectedItem != null) {
            this.myTree.addTo({ label: 'Item' }, selectedItem.element);
            this.myTree.render();
        }
        else {
            this.myTree.addTo({ label: 'Item' }, null);
            this.myTree.render();
        }
    };

    AddAfterOnClick(): void {
        let selectedItem = this.myTree.getSelectedItem();
        if (selectedItem != null) {
            this.myTree.addAfter({ label: 'Item' }, selectedItem.element);
            this.myTree.render();
        }
    };

    AddBeforeOnClick(): void {
        let selectedItem = this.myTree.getSelectedItem();
        if (selectedItem != null) {
            this.myTree.addBefore({ label: 'Item' }, selectedItem.element);
            this.myTree.render();
        }
    };

    UpdateOnClick(): void {
        let selectedItem = this.myTree.getSelectedItem();
        if (selectedItem != null) {
            this.myTree.updateItem({ label: 'Item' }, selectedItem.element);
            this.myTree.render();
        }
    };

    RemoveOnClick(): void {
        let selectedItem = this.myTree.getSelectedItem();
        if (selectedItem != null) {
            this.myTree.removeItem(selectedItem.element);
            this.myTree.render();
        }
    };

    DisableOnClick(): void {
        let selectedItem = this.myTree.getSelectedItem();
        if (selectedItem != null) {
            this.myTree.disableItem(selectedItem.element);
        }
    };

    ExpandOnClick(): void {
        let selectedItem = this.myTree.getSelectedItem();
        if (selectedItem != null) {
            this.myTree.expandItem(selectedItem.element);
        }
    };

    CollapseOnClick(): void {
        let selectedItem = this.myTree.getSelectedItem();
        if (selectedItem != null) {
            this.myTree.collapseItem(selectedItem.element);
        }
    };

    ExpandAllOnClick(): void {
        this.myTree.expandAll();
    };

    CollapseAllOnClick(): void {
        this.myTree.collapseAll();
    };

    EnableAllOnClick(): void {
        this.myTree.enableAll();
    };

    NextOnClick(): void {
        let selectedItem = this.myTree.selectedItem();
        let nextItem = selectedItem.element.nextElementSibling;
        if (nextItem != null) {
            this.myTree.selectItem(nextItem);
            this.myTree.ensureVisible(nextItem);
        }
    };

    PreviousOnClick(): void {
        let selectedItem = this.myTree.selectedItem();
        let prevItem = selectedItem.element.previousElementSibling;
        if (prevItem != null) {
            this.myTree.selectItem(prevItem);
            this.myTree.ensureVisible(prevItem);
        }
    };
}