import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentClassComponent } from './student-class.component';

const routes: Routes = [
  {
    path: "",
    component: StudentClassComponent
  }
]

@NgModule({
 
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class StudentClassRoutingModule { }
