import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxBarGaugeComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbargauge.ts';
import { jqxGaugeComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgauge.ts';
import { jqxSliderComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxslider.ts';

@NgModule({
    declarations: [AppComponent, jqxBarGaugeComponent, jqxGaugeComponent, jqxSliderComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        