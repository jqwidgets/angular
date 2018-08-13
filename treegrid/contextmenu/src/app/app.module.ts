import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts';
import { jqxMenuComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxmenu.ts';
import { jqxTreeGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtreegrid.ts';

@NgModule({
    declarations: [AppComponent, jqxGridComponent, jqxMenuComponent, jqxTreeGridComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        