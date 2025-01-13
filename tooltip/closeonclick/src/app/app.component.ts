﻿import { Component, ViewEncapsulation } from '@angular/core';

import { jqxTooltipModule, jqxTooltipComponent } from 'jqwidgets-ng/jqxtooltip';
@Component({
    selector: 'app-root',
    imports: [jqxTooltipModule],
    standalone: true,
    templateUrl: './app.component.html',
    styles: [`
        #container{
            width: 400px;
        }
        
        jqxTooltip {
            margin: 8px 8px 0 8px;
            float: left;
        }

        jqxTooltip div {
            height: 162px;
        }
    `],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    position: string = 'bottom';
}