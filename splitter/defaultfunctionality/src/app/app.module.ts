import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { jqxExpanderComponent } from 'jqwidgets-ng/jqxexpander';
import { jqxListBoxModule,  jqxListBoxComponent } from 'jqwidgets-ng/jqxlistbox';
import { jqxPanelComponent, jqxPanelModule } from 'jqwidgets-ng/jqxpanel';



@NgModule({
    declarations: [AppComponent, jqxExpanderComponent, jqxListBoxComponent, jqxPanelComponent, jqxSplitterComponent, jqxTreeComponent],
    imports: [BrowserModule, FormsModule, HttpModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        