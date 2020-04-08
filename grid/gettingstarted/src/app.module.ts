import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, FormsModule, jqxGridModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
