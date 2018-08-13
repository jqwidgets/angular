import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxPivotGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxpivotgrid.ts';
import { jqxDataTableComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdatatable.ts';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts';
import { jqxWindowComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxwindow.ts';

@NgModule({
    declarations: [AppComponent, jqxPivotGridComponent, jqxDataTableComponent, jqxGridComponent, jqxWindowComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        