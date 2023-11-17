import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ManageClassComponent } from './manage-class.component';


const routes: Routes = [
  {
    path: "",
    component: ManageClassComponent,
  }
]

@NgModule({
 
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ManageClassRoutingModule { }
