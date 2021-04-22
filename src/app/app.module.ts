import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ProductBacklogComponent } from './product-backlog/product-backlog.component';
import { SprintBacklogsComponent } from './sprint-backlogs/sprint-backlogs.component';
import { CapacityPlanningComponent } from './capacity-planning/capacity-planning.component';
import { RetrospectionComponent } from './retrospection/retrospection.component';
import { RefferenceDataComponent } from './refference-data/refference-data.component';
import { StandUpMeetComponent } from './stand-up-meet/stand-up-meet.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
