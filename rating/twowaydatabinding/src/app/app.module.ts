import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { jqxRatingComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxrating.ts';

@NgModule({
    declarations: [AppComponent, jqxRatingComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        