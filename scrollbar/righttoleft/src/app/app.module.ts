import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxScrollbarComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxscrollbar.ts';

@NgModule({
    declarations: [AppComponent, jqxScrollbarComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        