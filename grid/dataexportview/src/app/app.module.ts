import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
;
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

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
