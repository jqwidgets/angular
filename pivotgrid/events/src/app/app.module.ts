import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxPivotGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxpivotgrid.ts';
import { jqxButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbuttons.ts';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts';
import { jqxTextAreaComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtextarea.ts';
import { jqxWindowComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxwindow.ts';

@NgModule({
    declarations: [AppComponent, jqxPivotGridComponent, jqxButtonComponent, jqxGridComponent, jqxTextAreaComponent, jqxWindowComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        