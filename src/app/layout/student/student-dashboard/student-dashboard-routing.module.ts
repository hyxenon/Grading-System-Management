import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentDashboardComponent } from './student-dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: StudentDashboardComponent
  }
]

@NgModule({
 
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class StudentDashboardRoutingModule { }
