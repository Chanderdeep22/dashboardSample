import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { RetrospectionComponent } from '../../retrospection/retrospection.component';
import { CapacityPlanningComponent } from '../../capacity-planning/capacity-planning.component';
import {StandUpMeetComponent}from '../../stand-up-meet/stand-up-meet.component';
import { SprintBacklogsComponent } from '../../sprint-backlogs/sprint-backlogs.component';
import { ProductBacklogComponent } from '../../product-backlog/product-backlog.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import {RefferenceDataComponent} from '../../refference-data/refference-data.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'productBacklog',
    //     component: ProductBacklogComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'refferenceData',
    //         component: RefferenceDataComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'sprintBacklogs',
    //         component: SprintBacklogsComponent
    //     }]
    // },
        //     {path: '',
        //     children: [ {
        //         path: 'standUpMeet',
        //         component: StandUpMeetComponent
        //     }]
        // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'retrospection',   component: RetrospectionComponent },
    { path: 'capacityPlanning',component: CapacityPlanningComponent },
    { path: 'sprintBacklogs', component:SprintBacklogsComponent },
    { path: 'productBacklog', component:ProductBacklogComponent },
    {path:  'refferenceData', component:RefferenceDataComponent},
    {path:  'standUpMeet',    component:StandUpMeetComponent},
    { path: 'notifications',  component: NotificationsComponent },
];
