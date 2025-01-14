﻿import { Component, ViewEncapsulation } from '@angular/core';

import { jqxToolBarModule, jqxToolBarComponent } from 'jqwidgets-ng/jqxtoolbar';
@Component({
    selector: 'app-root',
    imports: [jqxToolBarModule],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {
    tools: string = 'button button button | toggleButton | dropdownlist combobox | input';

    theme: string = '';
    getWidth(): any {
        if (document.body.offsetWidth < 850) {
            return '90%';
        }

        return 850;
    }

    initTools = (type: string, index: number, tool: any, menuToolIninitialization: any): void => {
        let icon = document.createElement('div');
        if (type == 'button') {
            icon.className = 'jqx-editor-toolbar-icon jqx-editor-toolbar-icon-' + this.theme + ' buttonIcon ';
        }
        switch (index) {
            case 0:
                icon.className += 'jqx-editor-toolbar-icon-bold jqx-editor-toolbar-icon-bold-' + this.theme;
                icon.setAttribute('title', 'Bold');
                tool[0].appendChild(icon);
                break;
            case 1:
                icon.className += 'jqx-editor-toolbar-icon-italic jqx-editor-toolbar-icon-italic-' + this.theme;
                icon.setAttribute('title', 'Italic');
                tool[0].appendChild(icon);
                break;
            case 2:
                icon.className += 'jqx-editor-toolbar-icon-underline jqx-editor-toolbar-icon-underline-' + this.theme;
                icon.setAttribute('title', 'Underline');
                tool[0].appendChild(icon);
                break;
            case 3:
                tool.jqxToggleButton({ width: 80, toggled: true });
                tool[0].innerText = 'Enabled';
                tool.on('click', () => {
                    let toggled = tool.jqxToggleButton('toggled');
                    if (toggled) {
                        tool.text('Enabled');
                    } else {
                        tool.text('Disabled');
                    }
                });
                break;
            case 4:
                let dropDownListWidth;
                if (menuToolIninitialization) {
                    // specific setting for minimized tool
                    dropDownListWidth = '95%';
                } else {
                    dropDownListWidth = 130;
                }
                tool.jqxDropDownList({
                    width: dropDownListWidth, source: ["<span style='font-family: Courier New;'>Courier New</span>", "<span style='font-family: Times New Roman;'>Times New Roman</span>", "<span style='font-family: Verdana;'>Verdana</span>"], selectedIndex: 1,
                });
                break;
            case 5:
                let comboBoxWidth;
                if (menuToolIninitialization) {
                    // specific setting for minimized tool
                    comboBoxWidth = '95%';
                } else {
                    comboBoxWidth = 50;
                }
                tool.jqxComboBox({ width: comboBoxWidth, source: [8, 9, 10, 11, 12, 14, 16, 18, 20], selectedIndex: 3 });
                break;
            case 6:
                tool.jqxInput({ width: 185, placeHolder: 'Type here to search...' });
                break;
        }
    }
}