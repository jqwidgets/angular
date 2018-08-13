import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxNavigationBarComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxnavigationbar.ts';
import { jqxPanelComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxpanel.ts';

@NgModule({
    declarations: [AppComponent, jqxNavigationBarComponent, jqxPanelComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        