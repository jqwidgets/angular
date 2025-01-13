﻿import { Component, ViewEncapsulation } from '@angular/core';

import { initTeamDataTable } from '../assets/initdashboard';
import { initProjectsListBox } from '../assets/initdashboard';
import { initProjectHistoryChart } from '../assets/initdashboard';
import { teamSalesProjectsTimeline } from '../assets/initdashboard';
import { teamSupportProjectsTimeline } from '../assets/initdashboard';
import { teamSalesContacts } from '../assets/initdashboard';
import { teamSupportStaff } from '../assets/initdashboard';
import { teamSalesStaff } from '../assets/initdashboard';
import { team } from '../assets/initdashboard';

import { jqxLayoutModule, jqxLayoutComponent } from 'jqwidgets-ng/jqxlayout';
@Component({
    selector: 'app-root',
    imports: [jqxLayoutModule],
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {

    getWidth(): any {
        if (document.body.offsetWidth < 800) {
            return '90%';
        }

        return 800;
    }

    layout: any[] =
        [{
            type: 'layoutGroup',
            orientation: 'horizontal',
            items: [{
                type: 'layoutGroup',
                orientation: 'vertical',
                allowPin: false,
                width: 270,
                items: [{
                    type: 'tabbedGroup',
                    height: 300,
                    pinnedHeight: 30,
                    items: [{
                        type: 'layoutPanel',
                        title: 'Teams',
                        contentContainer: 'TeamsPanel',
                        initContent: () => {
                            initTeamDataTable();
                        }
                    }]
                }, {
                    type: 'tabbedGroup',
                    height: 300,
                    allowClose: true,
                    allowPin: false,
                    pinnedHeight: 30,
                    items: [{
                        type: 'layoutPanel',
                        title: 'Team Projects',
                        contentContainer: 'ProjectsPanel',
                        initContent: () => {
                            initProjectsListBox();
                        }
                    }, {
                        type: 'layoutPanel',
                        title: 'Projects Timeline',
                        contentContainer: 'ProjectsTimelinePanel',
                        initContent: () => {
                            let projectsTimelineDiv = document.getElementById('projectsTimelineDiv');
                            if (team === 'Sales') {
                                projectsTimelineDiv.innerHTML = teamSalesProjectsTimeline;
                            } else {
                                projectsTimelineDiv.innerHTML = teamSupportProjectsTimeline;
                            }
                        }
                    }]
                }]
            }, {
                type: 'layoutGroup',
                orientation: 'vertical',
                allowPin: false,
                width: 320,
                pinnedWidth: 80,
                items: [{
                    type: 'tabbedGroup',
                    height: 200,
                    pinnedHeight: 30,
                    items: [{
                        type: 'layoutPanel',
                        title: 'Contacts',
                        contentContainer: 'ContactsPanel',
                        initContent: () => {
                            document.getElementById('contactsTable').innerHTML = teamSalesContacts;
                        }
                    }, {
                        type: 'layoutPanel',
                        title: 'Staff',
                        contentContainer: 'StaffPanel',
                        initContent: () => {
                            let staffDiv = document.getElementById('staffDiv');
                            if (team === 'Sales') {
                                staffDiv.innerHTML = teamSalesStaff;
                            } else {
                                staffDiv.innerHTML = teamSupportStaff;
                            }
                        }
                    }]
                }, {
                    type: 'tabbedGroup',
                    allowPin: false,
                    height: 400,
                    pinnedHeight: 30,
                    items: [{
                        type: 'layoutPanel',
                        title: 'Project History',
                        contentContainer: 'ProjectHistoryPanel',
                        initContent: () => {
                            initProjectHistoryChart();
                        }
                    }]
                }]
            }]
        }];
}