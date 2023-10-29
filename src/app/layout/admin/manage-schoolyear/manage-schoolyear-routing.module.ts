import { NgModule } from '@angular/core';

import { ManageSchoolyearComponent } from './manage-schoolyear.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: ManageSchoolyearComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ManageSchoolyearRoutingModule { }
