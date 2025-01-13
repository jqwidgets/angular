import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxDragDropComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdragdrop.ts';

import { jqxTextAreaComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtextarea.ts';

@NgModule({
    declarations: [AppComponent, jqxDragDropComponent, jqxListBoxComponent, jqxTextAreaComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        