import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxColorPickerComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxcolorpicker.ts';
import { jqxRadioButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxradiobutton.ts';

@NgModule({
    declarations: [AppComponent, jqxColorPickerComponent, jqxRadioButtonComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        