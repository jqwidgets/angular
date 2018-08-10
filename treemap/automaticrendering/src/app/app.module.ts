import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { jqxTreeMapComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtreemap.ts';

@NgModule({
    declarations: [AppComponent, jqxTreeMapComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        