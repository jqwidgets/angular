import { Component, ViewChild, ElementRef } from '@angular/core';

import { jqxButtonComponent, jqxButtonModule } from 'jqwidgets-ng/jqxbuttons';
import { jqxCheckBoxComponent, jqxCheckBoxModule } from 'jqwidgets-ng/jqxcheckbox';
import { jqxWindowModule, jqxWindowComponent } from 'jqwidgets-ng/jqxwindow';

@Component({
    selector: 'app-root',
    imports: [jqxWindowModule, jqxCheckBoxModule, jqxButtonModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('customWindow') customWindow: jqxWindowComponent;
    @ViewChild('searchTextButton') searchTextButton: jqxButtonComponent;
    @ViewChild('searchTextInput') searchTextInput: ElementRef;

    _searchButtonHandle = () => {
        if (this.searchTextInput.nativeElement !== null) {
            if (this.searchTextInput.nativeElement.value !== '') {
                this.searchTextButton.disabled(false);
            }
            else {
                this.searchTextButton.disabled(true);
            }
        }
    }

    onKey(event: any): void {
        this._searchButtonHandle();
    };

    onKeyUp(event: any): void {
        this._searchButtonHandle();
    };

    onChange(event: any): void {
        this._searchButtonHandle();
    };

    showWindowButtonClick(): void {
        this.customWindow.open();
    }

    hideWindowButtonClick(): void {
        this.customWindow.close();
    }

    pinWindowButtonClick(): void {
        this.customWindow.draggable(false);
    }

    unpinWindowButtonClick(): void {
        this.customWindow.draggable(true);
    }

    collapseWindowButtonClick(): void {
        this.customWindow.collapse();
    }

    expandWindowButtonClick(): void {
        this.customWindow.expand();
    }
}