import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxCalendarComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxcalendar.ts';
import { jqxDockingComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdocking.ts';
import { jqxListBoxComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxlistbox.ts';
import { jqxPanelComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxpanel.ts';
import { jqxTabsComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtabs.ts';

@NgModule({
    declarations: [AppComponent, jqxCalendarComponent, jqxDockingComponent, jqxListBoxComponent, jqxPanelComponent, jqxTabsComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        