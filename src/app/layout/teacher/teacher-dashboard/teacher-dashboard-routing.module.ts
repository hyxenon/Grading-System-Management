import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherDashboardComponent } from './teacher-dashboard.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: TeacherDashboardComponent
  }
]

@NgModule({

  imports: [
    RouterModule.forChild(routes)
  ]
})
export class TeacherDashboardRoutingModule { }
