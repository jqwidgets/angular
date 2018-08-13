import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxInputComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxinput.ts';
import { jqxKnobComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxknob.ts';
import { jqxNumberInputComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxnumberinput.ts';

@NgModule({
    declarations: [AppComponent, jqxInputComponent, jqxKnobComponent, jqxNumberInputComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        