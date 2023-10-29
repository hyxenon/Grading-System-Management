import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration.component';

const routes: Routes = [
  {
    path: "",
    component: RegistrationComponent
  }
]

@NgModule({
  
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
