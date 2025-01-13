﻿import { Component, ViewChild, AfterViewInit } from '@angular/core';



import { jqxTreeModule, jqxTreeComponent } from 'jqwidgets-ng/jqxtree';
@Component({
    selector: 'app-root',
    imports: [jqxTreeModule],
    standalone: true,
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('myTree') myTree: jqxTreeComponent;

    ngAfterViewInit() {
        this.myTree.focus();
    }

    // Create jqxTree
    source: any[] = [
        {
            icon: "https://www.jqwidgets.com/angular/images/mailIcon.png", label: "Mail", expanded: true, items: [
                { icon: "https://www.jqwidgets.com/angular/images/calendarIcon.png", label: "Calendar" },
                { icon: "https://www.jqwidgets.com/angular/images/contactsIcon.png", label: "Contacts", selected: true }
            ]
        },
        {
            icon: "https://www.jqwidgets.com/angular/images/folder.png", label: "Inbox", expanded: true, items: [
                { icon: "https://www.jqwidgets.com/angular/images/folder.png", label: "Admin" },
                { icon: "https://www.jqwidgets.com/angular/images/folder.png", label: "Corporate" },
                { icon: "https://www.jqwidgets.com/angular/images/folder.png", label: "Finance" },
                { icon: "https://www.jqwidgets.com/angular/images/folder.png", label: "Other" },
            ]
        },
        { icon: "https://www.jqwidgets.com/angular/images/recycle.png", label: "Deleted Items" },
        { icon: "https://www.jqwidgets.com/angular/images/notesIcon.png", label: "Notes" },
        { iconsize: 14, icon: "https://www.jqwidgets.com/angular/images/settings.png", label: "Settings" },
        { icon: "https://www.jqwidgets.com/angular/images/favorites.png", label: "Favorites" },
    ];
}