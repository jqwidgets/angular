import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { jqxChatModule } from 'jqwidgets-ng/jqxchat';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule, CommonModule, jqxChatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
