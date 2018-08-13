import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxChartComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart.ts';
import { jqxCheckBoxComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxcheckbox.ts';
import { jqxRadioButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxradiobutton.ts';
import { jqxSliderComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxslider.ts';

@NgModule({
    declarations: [AppComponent, jqxChartComponent, jqxCheckBoxComponent, jqxRadioButtonComponent, jqxSliderComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        