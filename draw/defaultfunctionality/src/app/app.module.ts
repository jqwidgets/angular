import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { jqxDrawComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdraw.ts';

@NgModule({
    declarations: [AppComponent, jqxDrawComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        