import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';
import { jqxToolBarComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxToolBar.ts';

@NgModule({
    declarations: [AppComponent, jqxButtonComponent, jqxDropDownListComponent, jqxInputComponent, jqxNumberInputComponent, jqxToolBarComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        