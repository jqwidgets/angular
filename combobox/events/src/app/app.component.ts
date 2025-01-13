﻿import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { jqxComboBoxModule, jqxComboBoxComponent } from 'jqwidgets-ng/jqxcombobox';
import { jqxPanelModule, jqxPanelComponent } from 'jqwidgets-ng/jqxpanel';

@Component({
    selector: 'app-root',
    imports: [jqxComboBoxModule, jqxPanelModule],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})


export class AppComponent {
    @ViewChild('myComboBox') myComboBox: jqxComboBoxComponent;
    @ViewChild('myPanel') myPanel: jqxPanelComponent;

    source: any[] = [
        'Affogato',
        'Americano',
        'Bicerin',
        'Breve',
        'Café Bombón',
        'Café au lait',
        'Caffé Corretto',
        'Café Crema',
        'Caffé Latte',
        'Caffé macchiato',
        'Café mélange',
        'Coffee milk',
        'Cafe mocha',
        'Cappuccino',
        'Carajillo',
        'Cortado',
        'Cuban espresso',
        'Espresso',
        'Eiskaffee',
        'The Flat White',
        'Frappuccino',
        'Galao',
        'Greek frappé coffee',
        'Iced Coffee﻿',
        'Indian filter coffee',
        'Instant coffee',
        'Irish coffee',
        'Liqueur coffee'
    ];

    onSelect(event: any): void {
        let args = event.args;
        if (args != undefined) {
            let item = event.args.item;
            if (item != null) {
                this.myPanel.prepend(`<div style="margin-top: 5px;">Selected: ${item.label}</div>`);
            }
        }
    }

    onUnselect(event: any): void {
        let args = event.args;
        if (args != undefined) {
            let item = event.args.item;
            if (item != null) {
                this.myPanel.prepend(`<div style="margin-top: 5px;">Unselected: ${item.label}</div>`);
            }
        }
    }
}
