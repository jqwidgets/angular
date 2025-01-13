import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxPanelComponent, jqxPanelModule } from 'jqwidgets-ng/jqxpanel';

@NgModule({
    declarations: [AppComponent, jqxFormattedInputComponent, jqxInputComponent, jqxPanelComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        