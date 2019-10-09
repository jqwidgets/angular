import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxHeatMapComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxheatmap.ts';
import { jqxCheckBoxComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxcheckbox.ts';

@NgModule({
    declarations: [AppComponent, jqxHeatMapComponent, jqxCheckBoxComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        