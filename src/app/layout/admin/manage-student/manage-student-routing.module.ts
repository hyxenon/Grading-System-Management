import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ManageStudentComponent } from './manage-student.component';


const routes: Routes = [
  {
    path: "",
    component: ManageStudentComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ManageStudentRoutingModule { }
