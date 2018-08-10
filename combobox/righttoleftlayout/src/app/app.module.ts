import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { jqxComboboxComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxcombobox.ts';

@NgModule({
    declarations: [AppComponent, jqxComboboxComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        