import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts';
import { jqxRadioButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxradiobutton.ts';

@NgModule({
    declarations: [AppComponent, jqxGridComponent, jqxRadioButtonComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        