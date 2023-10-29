import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageSchoolyearComponent } from './manage-schoolyear.component';
import { ManageSchoolyearRoutingModule } from './manage-schoolyear-routing.module';



@NgModule({
  declarations: [
    ManageSchoolyearComponent
  ],
  imports: [
    CommonModule,
    ManageSchoolyearRoutingModule
  ]
})
export class ManageSchoolyearModule { }
