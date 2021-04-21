import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import {RefferenceDataComponent} from '../../refference-data/refference-data.component';
import { RetrospectionComponent } from '../../retrospection/retrospection.component';
import { CapacityPlanningComponent} from '../../capacity-planning/capacity-planning.component';
import {StandUpMeetComponent} from '../../stand-up-meet/stand-up-meet.component';
import { SprintBacklogsComponent } from '../../sprint-backlogs/sprint-backlogs.component';
import { ProductBacklogComponent } from '../../product-backlog/product-backlog.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    RetrospectionComponent,
    CapacityPlanningComponent,
    SprintBacklogsComponent,
    StandUpMeetComponent,    
    ProductBacklogComponent,
    RefferenceDataComponent,
    NotificationsComponent,
  ]
})

export class AdminLayoutModule {}
