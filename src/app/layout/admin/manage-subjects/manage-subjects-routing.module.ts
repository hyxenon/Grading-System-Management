import { NgModule } from '@angular/core';
import { ManageSubjectsComponent } from './manage-subjects.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    component: ManageSubjectsComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ManageSubjectsRoutingModule { }
