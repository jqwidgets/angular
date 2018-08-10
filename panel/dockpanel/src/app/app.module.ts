import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { jqxDockPanelComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdockpanel.ts';
import { jqxPanelComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxpanel.ts';

@NgModule({
    declarations: [AppComponent, jqxDockPanelComponent, jqxPanelComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        