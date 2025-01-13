import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxDropDownButtonComponent, jqxDropDownButtonModule } from 'jqwidgets-ng/jqxdropdownbutton';
import { jqxCheckBoxComponent, jqxCheckBoxModule } from 'jqwidgets-ng/jqxcheckbox';
import { jqxGridModule, jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
@Component({
    selector: 'app-root',
    imports: [jqxGridModule, jqxCheckBoxModule, jqxDropDownButtonModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('myDropDownButton') myDropDownButton: jqxDropDownButtonComponent;

    ngAfterViewInit(): void {
        let dropDownContent = '<div style="position: relative; margin-left: 3px; margin-top: 5px;">DropDownButton</div>';
        this.myDropDownButton.setContent(dropDownContent);
    }
}
