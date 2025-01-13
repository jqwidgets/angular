﻿import { Component, ViewChild } from '@angular/core';


import { jqxDockingLayoutModule, jqxDockingLayoutComponent } from 'jqwidgets-ng/jqdockinglayout';
import { jqxButtonModule, jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';

@Component({
    selector: 'app-root',
    imports: [jqxDockingLayoutModule, jqxButtonModule],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})


export class AppComponent {
    @ViewChild('myDockingLayout') myDockingLayout: jqxDockingLayoutComponent;
    @ViewChild('loadLayoutButton') loadLayoutButton: jqxButtonComponent;

    savedLayout: any;

    layout: any[] = this.generateLayout();

    getWidth(): any {
        if (document.body.offsetWidth < 800) {
            return '90%';
        }

        return 800;
    }

    generateLayout(): any[] {
        let layout = [
            {
                type: 'layoutGroup',
                orientation: 'horizontal',
                items: [{
                    type: 'autoHideGroup',
                    alignment: 'left',
                    width: 80,
                    unpinnedWidth: 200,
                    items: [{
                        type: 'layoutPanel',
                        title: 'Toolbox',
                        contentContainer: 'ToolboxPanel'
                    }, {
                        type: 'layoutPanel',
                        title: 'Help',
                        contentContainer: 'HelpPanel'
                    }]
                },
                {
                    type: 'layoutGroup',
                    orientation: 'vertical',
                    width: 308,
                    items: [{
                        type: 'documentGroup',
                        height: 400,
                        minHeight: 200,
                        items: [{
                            type: 'documentPanel',
                            title: 'Document 1',
                            contentContainer: 'Document1Panel'
                        },
                        {
                            type: 'documentPanel',
                            title: 'Document 2',
                            contentContainer: 'Document2Panel'
                        }]
                    },
                    {
                        type: 'tabbedGroup',
                        height: 200,
                        pinnedHeight: 30,
                        items: [{
                            type: 'layoutPanel',
                            title: 'Error List',
                            contentContainer: 'ErrorListPanel'
                        }]
                    }]
                },
                {
                    type: 'tabbedGroup',
                    width: 220,
                    minWidth: 200,
                    items: [
                        {
                            type: 'layoutPanel',
                            title: 'Solution Explorer',
                            contentContainer: 'SolutionExplorerPanel',
                            initContent: () => {
                                // initialize a jqxTree inside the Solution Explorer Panel
                                let source = [{
                                    icon: 'https://www.jqwidgets.com/angular/images/earth.png',
                                    label: 'Project',
                                    expanded: true,
                                    items: [
                                        {
                                            icon: 'https://www.jqwidgets.com/angular/images/folder.png',
                                            label: 'css',
                                            expanded: true,
                                            items: [{
                                                icon: 'https://www.jqwidgets.com/angular/images/nav1.png',
                                                label: 'jqx.base.css'
                                            },
                                            {
                                                icon: 'https://www.jqwidgets.com/angular/images/nav1.png',
                                                label: 'jqx.energyblue.css'
                                            }, {
                                                icon: 'https://www.jqwidgets.com/angular/images/nav1.png',
                                                label: 'jqx.orange.css'
                                            }]
                                        },
                                        {
                                            icon: 'https://www.jqwidgets.com/angular/images/folder.png',
                                            label: 'scripts',
                                            items: [{
                                                icon: 'https://www.jqwidgets.com/angular/images/nav1.png',
                                                label: 'jqxcore.js'
                                            },
                                            {
                                                icon: 'https://www.jqwidgets.com/angular/images/nav1.png',
                                                label: 'jqxdata.js'
                                            }, {
                                                icon: 'https://www.jqwidgets.com/angular/images/nav1.png',
                                                label: 'jqxgrid.js'
                                            }]
                                        },
                                        {
                                            icon: 'https://www.jqwidgets.com/angular/images/nav1.png',
                                            label: 'index.htm'
                                        }]
                                }];

                                jqwidgets.createInstance('#treeContainer', 'jqxTree', { theme: 'material', width: '100%', height: '99%', source: source })
                            }
                        },
                        {
                            type: 'layoutPanel',
                            title: 'Properties',
                            contentContainer: 'PropertiesPanel'
                        }]
                }]
            },
            {
                type: 'floatGroup',
                width: 500,
                height: 300,
                position: {
                    x: 100,
                    y: 250
                },
                items: [{
                    type: 'layoutPanel',
                    title: 'Output',
                    contentContainer: 'OutputPanel',
                    selected: true
                }]
            }];
        return layout;
    }

    saveBtnOnClick(): void {
        this.savedLayout = this.myDockingLayout.saveLayout();
        this.loadLayoutButton.disabled(false);
    }

    loadBtnOnClick(): void {
        this.myDockingLayout.loadLayout(this.savedLayout);
        this.loadLayoutButton.disabled(true);
    }
}
