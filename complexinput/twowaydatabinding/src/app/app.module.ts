import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxComplexInputComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxcomplexinput.ts';
import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';

@NgModule({
    declarations: [AppComponent, jqxComplexInputComponent, jqxInputComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        