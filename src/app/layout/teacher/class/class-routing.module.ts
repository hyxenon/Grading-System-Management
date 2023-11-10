import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClassComponent } from './class.component';

const routes: Routes = [
  {
    path: "",
    component: ClassComponent
  }
]

@NgModule({

  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ClassRoutingModule { }
