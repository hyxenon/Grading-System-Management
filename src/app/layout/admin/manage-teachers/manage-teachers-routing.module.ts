import { NgModule } from '@angular/core';
import { ManageTeachersComponent } from './manage-teachers.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: ManageTeachersComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ManageTeachersRoutingModule { }
