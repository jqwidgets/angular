import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxKnobComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxknob.ts';
import { jqxNumberInputComponent } from 'jqwidgets-ng/jqxnumberinput';

@NgModule({
    declarations: [AppComponent, jqxInputComponent, jqxKnobComponent, jqxNumberInputComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        