import { Component, ViewChild } from '@angular/core';



import { jqxTreeModule, jqxTreeComponent } from 'jqwidgets-ng/jqxtree';
@Component({
    selector: 'app-root',
    imports: [jqxTreeModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myTree') myTree: jqxTreeComponent;

    myTreeOnInitialized(): void {
        this.myTree.selectItem(document.getElementById('home'));
        let solutionsItem = document.getElementById('solutions');
        this.myTree.expandItem(solutionsItem);
        this.myTree.checkItem(solutionsItem, true);
        this.myTree.uncheckItem(document.getElementById('manufacturing'));
    }

    myCheckBoxOnChange(event: any): void {
        let checked = event.args.checked;
        this.myTree.hasThreeStates(checked);
    };
}