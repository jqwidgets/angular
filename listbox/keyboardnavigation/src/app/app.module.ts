import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { jqxListBoxComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxlistbox.ts';

@NgModule({
    declarations: [AppComponent, jqxListBoxComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        