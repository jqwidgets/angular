import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxChartComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart.ts';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts';
import { jqxTabsComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtabs.ts';

@NgModule({
    declarations: [AppComponent, jqxChartComponent, jqxGridComponent, jqxTabsComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        