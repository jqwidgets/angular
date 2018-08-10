import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { jqxDataTableComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdatatable.ts';
import { jqxInputComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxinput.ts';

@NgModule({
declarations: [AppComponent, jqxDataTableComponent, jqxInputComponent],
imports: [BrowserModule],
providers: [],
bootstrap: [AppComponent]
})

export class AppModule { }
    