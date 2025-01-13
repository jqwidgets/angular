import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxRadioButtonComponent } from 'jqwidgets-ng/jqxradiobutton';

@NgModule({
    declarations: [AppComponent, jqxDateTimeInputComponent, jqxInputComponent, jqxRadioButtonComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
