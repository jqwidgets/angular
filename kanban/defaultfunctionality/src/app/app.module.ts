import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxKanbanComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxkanban.ts';
import { jqxSplitterComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxsplitter.ts';

@NgModule({
    declarations: [AppComponent, jqxKanbanComponent, jqxSplitterComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        