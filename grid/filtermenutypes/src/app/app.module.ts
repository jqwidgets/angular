import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbuttons.ts';
import { jqxCheckBoxComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxcheckbox.ts';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts';
import { jqxPanelComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxpanel.ts';

@NgModule({
    declarations: [AppComponent, jqxButtonComponent, jqxCheckBoxComponent, jqxGridComponent, jqxPanelComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        