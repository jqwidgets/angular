﻿import { Component, ViewChild } from '@angular/core';

import { jqxPanelComponent, jqxPanelModule } from 'jqwidgets-ng/jqxpanel';

import { jqxFormattedInputModule, jqxFormattedInputComponent } from 'jqwidgets-ng/jqxformattedinput';
@Component({
    selector: 'app-root',
    imports: [jqxFormattedInputModule, jqxPanelModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    @ViewChild('myPanel') myPanel: jqxPanelComponent;

    onOpen(event: any): void {
        this.myPanel.append('<strong>' + event.type + '</strong><br />');
    };

    onClose(event: any): void {
        this.myPanel.append('<strong>' + event.type + '</strong><br />');
    };

    onChange(event: any): void {
        let args = event.args;
        let newValue = args.value;
        let oldValue = args.oldValue;
        let radix = args.radix;
        this.myPanel.append('<strong>' + event.type + '</strong><br />' +
            'value: ' + newValue + ', old value: ' + oldValue + ', radix: ' + radix + '<br />');
    };

    onRadixChange(event: any): void {
        let args = event.args;
        let newRadix = args.radix;
        let oldRadix = args.oldRadix;
        let newValue = args.value;
        let oldValue = args.oldValue;
        this.myPanel.append('<strong>' + event.type + '</strong><br />' +
            'radix: ' + newRadix + ', old radix: ' + oldRadix +
            '<br />value: ' + newValue + ', old value: ' + oldValue + '<br />');
    };
}