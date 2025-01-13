import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxTimePickerComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtimepicker.ts';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxFormComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxform.ts';

@NgModule({
    declarations: [AppComponent, jqxTimePickerComponent, jqxButtonComponent, jqxFormComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        