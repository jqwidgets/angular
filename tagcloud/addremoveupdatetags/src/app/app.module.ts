import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbuttons.ts';
import { jqxTagCloudComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtagcloud.ts';

@NgModule({
    declarations: [AppComponent, jqxButtonComponent, jqxTagCloudComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        