import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist';
import { jqxTreeGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtreegrid.ts';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxPanelComponent, jqxPanelModule } from 'jqwidgets-ng/jqxpanel';
import { jqxTreeGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtreegrid.ts';

@NgModule({
    declarations: [AppComponent, jqxButtonComponent, jqxDropDownListComponent, jqxTreeGridComponent, jqxInputComponent, jqxPanelComponent, jqxTreeGridComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        