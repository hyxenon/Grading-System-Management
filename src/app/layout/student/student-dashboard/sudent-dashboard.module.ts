import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDashboardComponent } from './student-dashboard.component';
import { StudentDashboardRoutingModule } from './student-dashboard-routing.module';



@NgModule({
  declarations: [
    StudentDashboardComponent
  ],
  imports: [
    CommonModule,
    StudentDashboardRoutingModule
  ]
})
export class SudentDashboardModule { }
