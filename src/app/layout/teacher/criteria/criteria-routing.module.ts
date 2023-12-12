import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CriteriaComponent } from './criteria.component';

const routes: Routes = [
  {
    path: "",
    component: CriteriaComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CriteriaRoutingModule { }
