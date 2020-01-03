import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxgrid.ts';
import { jqxButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbuttons.ts';

@NgModule({
  declarations: [
      AppComponent, jqxButtonComponent, jqxGridComponent
  ],
  imports: [
      BrowserModule, CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
