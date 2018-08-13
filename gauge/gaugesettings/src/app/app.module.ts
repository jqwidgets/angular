import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxCheckBoxComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxcheckbox.ts';
import { jqxExpanderComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxexpander.ts';
import { jqxGaugeComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgauge.ts';
import { jqxRadioButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxradiobutton.ts';

@NgModule({
    declarations: [AppComponent, jqxCheckBoxComponent, jqxExpanderComponent, jqxGaugeComponent, jqxRadioButtonComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        