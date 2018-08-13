import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxRadioButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxradiobutton.ts';
import { jqxTabsComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtabs.ts';

@NgModule({
    declarations: [AppComponent, jqxRadioButtonComponent, jqxTabsComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        