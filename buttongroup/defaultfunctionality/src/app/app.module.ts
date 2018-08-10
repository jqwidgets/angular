import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { jqxButtonGroupComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbuttongroup.ts';
import { jqxRadioButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxradiobutton.ts';

@NgModule({
    declarations: [AppComponent, jqxButtonGroupComponent, jqxRadioButtonComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        