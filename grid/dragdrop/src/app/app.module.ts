import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxDragDropComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdragdrop.ts';
;

@NgModule({
    declarations: [AppComponent, jqxDragDropComponent, jqxGridComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        