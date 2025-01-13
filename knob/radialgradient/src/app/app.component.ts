import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { jqxKnobComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxknob.ts';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';

import { jqxKnobModule, jqxKnobComponent } from 'jqwidgets-ng/jqxknob';
@Component({
    selector: 'app-root',
    imports: [jqxKnobModule],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    @ViewChild('myKnob') myKnob: jqxKnobComponent;
    @ViewChild('myNumberInput') myNumberInput: jqxNumberInputComponent;

    progressBar: any =
        {
            style: { fill: { color: '#00a4e1', gradientType: 'radial', gradientStops: [[0, 0.5], [100, 1]] } },
            size: '50%',
            offset: '50%',
            background: { fill: { color: '#FFFFFF', gradientType: 'linear', gradientStops: [[0, 0.5], [100, 1]] } }
        };

    pointer: any =
        {
            type: 'line', style: { fill: '#00a4e1' }, size: '50%', offset: '50%', thickness: 0
        };

    myKnobOnChange(event: any): void {
        this.myNumberInput.val(event.args.value);
    };

    myNumberInputOnChange(event: any): void {
        this.myKnob.val(event.args.value);
    };
}