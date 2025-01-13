﻿import { Component } from '@angular/core';

import { jqxDropDownListModule, jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
@Component({
    selector: 'app-root',
    imports: [jqxDropDownListModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    source: any[] = [
        { html: '<div style="height: 20px; float: left;"><img style="float: left; margin-top: 2px; margin-right: 5px;" src="https://www.jqwidgets.com/angular/images/numberinput.png"/><span style="float: left; font-size: 13px; font-family: Verdana Arial;">jqxNumberInput</span></div>', title: 'jqxNumberInput' },
        { html: '<div style="height: 20px; float: left;"><img style="float: left; margin-top: 2px; margin-right: 5px;" src="https://www.jqwidgets.com/angular/images/progressbar.png"/><span style="float: left; font-size: 13px; font-family: Verdana Arial;">jqxProgressBar</span></div>', title: 'jqxProgressBar' },
        { html: '<div style="height: 20px; float: left;"><img style="float: left; margin-top: 2px; margin-right: 5px;" src="https://www.jqwidgets.com/angular/images/calendar.png"/><span style="float: left; font-size: 13px; font-family: Verdana Arial;">jqxCalendar</span></div>', title: 'jqxCalendar' },
        { html: '<div style="height: 20px; float: left;"><img style="float: left; margin-top: 2px; margin-right: 5px;" src="https://www.jqwidgets.com/angular/images/button.png"/><span style="float: left; font-size: 13px; font-family: Verdana Arial;">jqxButton</span></div>', title: 'jqxButton' },
        { html: '<div style="height: 20px; float: left;"><img style="float: left; margin-top: 2px; margin-right: 5px;" src="https://www.jqwidgets.com/angular/images/dropdownlist.png"/><span style="float: left; font-size: 13px; font-family: Verdana Arial;">jqxDropDownList</span></div>', title: 'jqxDropDownList' },
        { html: '<div style="height: 20px; float: left;"><img style="float: left; margin-top: 2px; margin-right: 5px;" src="https://www.jqwidgets.com/angular/images/listbox.png"/><span style="float: left; font-size: 13px; font-family: Verdana Arial;">jqxListBox</span></div>', title: 'jqxListBox' },
        { html: '<div style="height: 20px; float: left;"><img style="float: left; margin-top: 2px; margin-right: 5px;" src="https://www.jqwidgets.com/angular/images/tooltip.png"/><span style="float: left; font-size: 13px; font-family: Verdana Arial;">jqxTooltip</span></div>', title: 'jqxTooltip' },
        { html: '<div style="height: 20px; float: left;"><img style="float: left; margin-top: 2px; margin-right: 5px;" src="https://www.jqwidgets.com/angular/images/scrollbar.png"/><span style="float: left; font-size: 13px; font-family: Verdana Arial;">jqxScrollBar</span></div>', title: 'jqxScrollBar' },
        { html: '<div style="height: 20px; float: left;"><img style="float: left; margin-top: 2px; margin-right: 5px;" src="https://www.jqwidgets.com/angular/images/datetimeinput.png"/><span style="float: left; font-size: 13px; font-family: Verdana Arial;">jqxDateTimeInput</span></div>', title: 'jqxDateTimeInput' },
        { html: '<div style="height: 20px; float: left;"><img style="float: left; margin-top: 2px; margin-right: 5px;" src="https://www.jqwidgets.com/angular/images/expander.png"/><span style="float: left; font-size: 13px; font-family: Verdana Arial;">jqxExpander</span></div>', title: 'jqxExpander' },
        { html: '<div style="height: 20px; float: left;"><img style="float: left; margin-top: 2px; margin-right: 5px;" src="https://www.jqwidgets.com/angular/images/menu.png"/><span style="float: left; font-size: 13px; font-family: Verdana Arial;">jqxMenu</span></div>', title: 'jqxMenu' },
    ];
}

