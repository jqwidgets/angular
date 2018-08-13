import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbuttons.ts';
import { jqxDateTimeInputComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdatetimeinput.ts';
import { jqxDropDownListComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdropdownlist.ts';
import { jqxExpanderComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxexpander.ts';
import { jqxInputComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxinput.ts';
import { jqxPasswordInputComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxpasswordinput.ts';
import { jqxValidatorComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxvalidator.ts';

@NgModule({
    declarations: [AppComponent, jqxButtonComponent, jqxDateTimeInputComponent, jqxDropDownListComponent, jqxExpanderComponent, jqxInputComponent, jqxPasswordInputComponent, jqxValidatorComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        