import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherDashboardComponent } from './teacher-dashboard.component';
import { TeacherDashboardRoutingModule } from './teacher-dashboard-routing.module';



@NgModule({
  declarations: [
    TeacherDashboardComponent
  ],
  imports: [
    CommonModule,
    TeacherDashboardRoutingModule
  ]
})
export class TeacherDashboardModule { }
