import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { jqxProgressBarComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxprogressbar.ts';
import { jqxRepeatButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxrepeatbutton.ts';

@NgModule({
    declarations: [AppComponent, jqxProgressBarComponent, jqxRepeatButtonComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        