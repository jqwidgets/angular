import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxCheckBoxComponent } from 'jqwidgets-ng/jqxcheckbox';
import { jqxExpanderComponent } from 'jqwidgets-ng/jqxexpander';
import { jqxGanttComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgauge.ts';
import { jqxRadioButtonComponent } from 'jqwidgets-ng/jqxradiobutton';

@NgModule({
    declarations: [AppComponent, jqxCheckBoxComponent, jqxExpanderComponent, jqxGanttComponent, jqxRadioButtonComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        