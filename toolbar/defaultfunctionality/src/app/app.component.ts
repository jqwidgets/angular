﻿import { Component, ElementRef, ViewEncapsulation } from '@angular/core';

import { jqxToolbarModule, jqxToolbarComponent } from 'jqwidgets-ng/jqxtoolbar';
@Component({
    selector: 'app-root',
    imports: [jqxToolbarModule],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    getWidth(): any {
        if (document.body.offsetWidth < 700) {
            return '90%';
        }

        return 700;
    }

    tools: string = 'toggleButton toggleButton toggleButton | toggleButton | dropdownlist combobox | input | custom';
    initTools: any = (type: string, index: number, tool: any, menuToolIninitialization): void => {
        let icon = document.createElement('div');
        if (type == "toggleButton") {
            icon.className = 'jqx-editor-toolbar-icon jqx-editor-toolbar-icon-arctic buttonIcon ';
        }
        switch (index) {
            case 0:
                icon.className += "jqx-editor-toolbar-icon-bold jqx-editor-toolbar-icon-bold-arctic";
                icon.setAttribute("title", "Bold");
                tool[0].appendChild(icon);
                break;
            case 1:
                icon.className += "jqx-editor-toolbar-icon-italic jqx-editor-toolbar-icon-italic-arctic";
                icon.setAttribute("title", "Italic");
                tool[0].appendChild(icon);
                break;
            case 2:
                icon.className += "jqx-editor-toolbar-icon-underline jqx-editor-toolbar-icon-underline-arctic";
                icon.setAttribute("title", "Underline");
                tool[0].appendChild(icon);
                break;
            case 3:
                tool.jqxToggleButton({ width: 80, toggled: true });
                tool.text("Enabled");
                tool.on("click", () => {
                    let toggled = tool.jqxToggleButton("toggled");
                    if (toggled) {
                        tool.text("Enabled");
                    } else {
                        tool.text("Disabled");
                    }
                });
                break;
            case 4:
                tool.jqxDropDownList({ width: 130, source: ["<span style='font-family: Courier New;'>Courier New</span>", "<span style='font-family: Times New Roman;'>Times New Roman</span>", "<span style='font-family: Verdana;'>Verdana</span>"], selectedIndex: 1 });
                break;
            case 5:
                tool.jqxComboBox({ width: 50, source: [8, 9, 10, 11, 12, 14, 16, 18, 20], selectedIndex: 3 });
                break;
            case 6:
                tool.jqxInput({ width: 200, placeHolder: "Type here to search..." });
                break;
            case 7:
                let button = document.createElement('div');
                let img = document.createElement('img');
                img.src = 'https://www.jqwidgets.com/angular/images/administrator.png'
                img.title = 'Custom tool';
                button.appendChild(img);
                tool[0].appendChild(button);
                tool.jqxButton({ height: 15 });
                break;
        }
    };
}