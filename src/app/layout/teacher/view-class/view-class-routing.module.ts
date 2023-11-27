import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewClassComponent } from './view-class.component';

const routes: Routes = [
  {
    path: "",
    component: ViewClassComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]  
})
export class ViewClassRoutingModule { }
