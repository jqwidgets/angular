import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxPanelComponent, jqxPanelModule } from 'jqwidgets-ng/jqxpanel';
import { jqxSliderComponent } from 'jqwidgets-ng/jqxslider';

@NgModule({
    declarations: [AppComponent, jqxPanelComponent, jqxSliderComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        