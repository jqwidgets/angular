import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { jqxCheckBoxComponent } from 'jqwidgets-ng/jqxcheckbox';

@NgModule({
    declarations: [AppComponent, jqxChartComponent, jqxCheckBoxComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        