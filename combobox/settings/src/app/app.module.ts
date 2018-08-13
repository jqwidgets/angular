import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbuttons.ts';
import { jqxCheckBoxComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxcheckbox.ts';
import { jqxComboBoxComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxcombobox.ts';
import { jqxDropDownListComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdropdownlist.ts';
import { jqxExpanderComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxexpander.ts';

@NgModule({
    declarations: [AppComponent, jqxButtonComponent, jqxCheckBoxComponent, jqxComboBoxComponent, jqxDropDownListComponent, jqxExpanderComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        