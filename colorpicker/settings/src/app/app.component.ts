import { Component, ViewChild, ElementRef } from '@angular/core';

import { jqxDropDownButtonModule, jqxDropDownButtonComponent } from 'jqwidgets-ng/jqxdropdownbutton';
import { jqxColorPickerModule } from 'jqwidgets-ng/jqxcolorpicker';

@Component({
    selector: 'app-root',
    imports: [jqxDropDownButtonModule, jqxColorPickerModule],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('myColorPicker') myColorPicker: jqxColorPickerComponent;
    @ViewChild('colorLog') colorLog: ElementRef;

    colorChanged(event: any): void {
        this.colorLog.nativeElement.innerHTML = `<div>Color: #${event.args.color.hex}</div>`;
    }

    hueModeChanged(event: any): void {
        if (event.args.checked) {
            this.myColorPicker.colorMode('hue');
        }
        else {
            this.myColorPicker.colorMode('saturation');
        }
    }
}
