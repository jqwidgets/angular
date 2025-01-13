import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxLayoutComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxlayout.ts';
import { jqxDockingLayoutComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdockinglayout.ts';


@NgModule({
    declarations: [AppComponent, jqxButtonComponent, jqxLayoutComponent, jqxDockingLayoutComponent, jqxTreeComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        