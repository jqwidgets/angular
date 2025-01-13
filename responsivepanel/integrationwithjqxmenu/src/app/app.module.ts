import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxMenuComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxmenu.ts';
import { jqxPanelComponent, jqxPanelModule } from 'jqwidgets-ng/jqxpanel';


@NgModule({
    declarations: [AppComponent, jqxButtonComponent, jqxMenuComponent, jqxPanelComponent, jqxResponsivePanelComponent],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
        