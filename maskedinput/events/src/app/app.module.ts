import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { jqxInputComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxinput.ts';
import { jqxMaskedInputComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxmaskedinput.ts';
import { jqxPanelComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxpanel.ts';

@NgModule({
    declarations: [AppComponent, jqxInputComponent, jqxMaskedInputComponent, jqxPanelComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        