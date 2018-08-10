import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { jqxButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbuttons.ts';
import { jqxComboboxComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxcombobox.ts';

@NgModule({
    declarations: [AppComponent, jqxButtonComponent, jqxComboboxComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        