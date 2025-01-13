﻿import { Component } from '@angular/core';

import { jqxDropDownListModule, jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
@Component({
    selector: 'app-root',
    imports: [jqxDropDownListModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent {
    source: string[] =
        [
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
}
