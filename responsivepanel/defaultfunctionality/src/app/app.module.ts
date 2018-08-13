import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxButtonComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxbuttons.ts';
import { jqxPanelComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxpanel.ts';
import { jqxResponsivePanelComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxresponsivepanel.ts';
import { jqxTreeComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtree.ts';

@NgModule({
    declarations: [AppComponent, jqxButtonComponent, jqxPanelComponent, jqxResponsivePanelComponent, jqxTreeComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        