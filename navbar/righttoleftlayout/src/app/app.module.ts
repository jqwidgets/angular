import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { jqxNavBarComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxnavbar.ts';

@NgModule({
    declarations: [AppComponent, jqxNavBarComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        