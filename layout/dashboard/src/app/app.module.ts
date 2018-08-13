import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxChartComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart.ts';
import { jqxDataTableComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdatatable.ts';
import { jqxLayoutComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxlayout.ts';
import { jqxListBoxComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxlistbox.ts';
import { jqxMenuComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxmenu.ts';
import { jqxTreeComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtree.ts';

@NgModule({
    declarations: [AppComponent, jqxChartComponent, jqxDataTableComponent, jqxLayoutComponent, jqxListBoxComponent, jqxMenuComponent, jqxTreeComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        