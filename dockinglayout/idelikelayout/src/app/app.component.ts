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
    @ViewChild('viewServerExplorerBtn') viewServerExplorerBtn: jqxButtonComponent;

    savedLayout: any;

    layout: any[] = this.generateLayout();

    getWidth(): any {
        if (document.body.offsetWidth < 800) {
            return '90%';
        }

        return 800;
    }

    generateLayout(): any[] {
        let layout = [{
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
            }, {
                type: 'layoutGroup',
                orientation: 'vertical',
                width: 308,
                items: [{
                    type: 'documentGroup',
                    height: 400,
                    minHeight: 200,
                    items: [{
                        type: 'documentPanel',
                        title: 'index.htm',
                        contentContainer: 'Document1Panel',
                        initContent: () => {
                            let textArea = jqwidgets.createInstance('#Document1TextArea', 'jqxTextArea', { theme: 'material', width: '100%', height: 400 });
                            textArea.val('<!DOCTYPE html>\n<html>\n\t<head>\n\t<title>Page Title</title>\n\t</head>\n\t<body>\n\t\t<h1>This is a Heading</h1>\n\t\t<p>This is a paragraph.</p>\n\t</body>\n</html>');
                        }
                    }, {
                        type: 'documentPanel',
                        title: 'New Document',
                        contentContainer: 'Document2Panel',
                        initContent: () => {
                            jqwidgets.createInstance('#Document2TextArea', 'jqxTextArea', { theme: 'material', width: '100%', height: 400, placeHolder: 'Blank document' });
                        }
                    }]
                }, {
                    type: 'tabbedGroup',
                    height: 200,
                    minHeight: 200,
                    pinnedHeight: 30,
                    items: [{
                        type: 'layoutPanel',
                        title: 'Error List',
                        contentContainer: 'ErrorListPanel'
                    }, {
                        type: 'layoutPanel',
                        title: 'Performance',
                        contentContainer: 'PerformancePanel',
                        selected: true,
                        initContent: () => {
                            let data = [1, 5, 12, 5, 33, 38, 40, 42, 18, 18, 70, 76, 75, 99, 100, 88, 64, 13, 19, 15];

                            let chartOptions = {
                                title: 'CPU Usage',
                                description: '',
                                showLegend: false,
                                enableAnimations: false,
                                showBorderLine: false,
                                showToolTips: false,
                                backgroundColor: 'transparent',
                                padding: {
                                    left: 0,
                                    top: 10,
                                    right: 0,
                                    bottom: 0
                                },
                                titlePadding: {
                                    left: 0,
                                    top: 0,
                                    right: 0,
                                    bottom: 0
                                },
                                source: data,
                                xAxis: {
                                    visible: false,
                                    valuesOnTicks: false
                                },
                                colorScheme: 'scheme01',
                                seriesGroups: [{
                                    type: 'line',
                                    columnsGapPercent: 0,
                                    columnsMaxWidth: 2,
                                    valueAxis: {
                                        minValue: 0,
                                        visible: false
                                    },
                                    series: [{
                                        linesUnselectMode: 'click',
                                        colorFunction: function (value, itemIndex, serie, group) {
                                            if (value <= 33) {
                                                return '#32CD32';
                                            } else if (value <= 66) {
                                                return '#FFD700';
                                            } else {
                                                return '#AA4643';
                                            }
                                        }
                                    }]
                                }]
                            };
                            jqwidgets.createInstance('#cpuUsage', 'jqxChart', chartOptions);
                        }
                    }]
                }]
            }, {
                type: 'tabbedGroup',
                width: 220,
                minWidth: 200,
                items: [{
                    type: 'layoutPanel',
                    title: 'Solution Explorer',
                    contentContainer: 'SolutionExplorerPanel',
                    initContent: () => {
                        // initialize a jqxTree inside the Solution Explorer Panel
                        let source = [{
                            icon: 'https://www.jqwidgets.com/angular/images/earth.png',
                            label: 'Project',
                            expanded: true,
                            items: [{
                                icon: 'https://www.jqwidgets.com/angular/images/folder.png',
                                label: 'css',
                                expanded: true,
                                items: [{
                                    icon: 'https://www.jqwidgets.com/angular/images/nav1.png',
                                    label: 'jqx.base.css'
                                }, {
                                    icon: 'https://www.jqwidgets.com/angular/images/nav1.png',
                                    label: 'jqx.energyblue.css'
                                }, {
                                    icon: 'https://www.jqwidgets.com/angular/images/nav1.png',
                                    label: 'jqx.orange.css'
                                }]
                            }, {
                                icon: 'https://www.jqwidgets.com/angular/images/folder.png',
                                label: 'scripts',
                                items: [{
                                    icon: 'https://www.jqwidgets.com/angular/images/nav1.png',
                                    label: 'jqxcore.js'
                                }, {
                                    icon: 'https://www.jqwidgets.com/angular/images/nav1.png',
                                    label: 'jqxdata.js'
                                }, {
                                    icon: 'https://www.jqwidgets.com/angular/images/nav1.png',
                                    label: 'jqxgrid.js'
                                }]
                            }, {
                                icon: 'https://www.jqwidgets.com/angular/images/nav1.png',
                                label: 'index.htm',
                                selected: true
                            }]
                        }];
                        jqwidgets.createInstance('#solutionExplorerTree', 'jqxTree', { theme: 'material', width: 190, height: '99%', source: source });
                    }
                }, {
                    type: 'layoutPanel',
                    title: 'Properties',
                    contentContainer: 'PropertiesPanel'
                }]
            }]
        }];
        return layout;
    }

    viewServerExplorerBtnOnClick(): void {
        this.myDockingLayout.addFloatGroup(300, 200, { x: 100, y: 200 }, 'layoutPanel', 'Server Explorer', '<div id="serverExplorerTree" />',
            (): void => {
                let source = [{
                    icon: 'https://www.jqwidgets.com/angular/images/dataadapter.png',
                    label: 'Data Connections',
                    expanded: true,
                    items: [{
                        icon: 'https://www.jqwidgets.com/angular/images/validator.png',
                        label: 'northwinddatabase.mdf'
                    }]
                }, {
                    icon: 'https://www.jqwidgets.com/angular/images/nav1.png',
                    label: 'Servers',
                    items: [{
                        icon: 'https://www.jqwidgets.com/angular/images/nav1.png',
                        label: 'WorkStation3-PC'
                    }, {
                        icon: 'https://www.jqwidgets.com/angular/images/dragdrop.png',
                        label: 'SharePoint Connections'
                    }]
                }];
                jqwidgets.createInstance('#serverExplorerTree', 'jqxTree', { theme: 'material', width: '99%', height: '99%', source: source });
            }
        );
        this.viewServerExplorerBtn.disabled(true);
    }
}
