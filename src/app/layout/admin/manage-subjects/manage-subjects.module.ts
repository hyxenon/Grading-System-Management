import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageSubjectsComponent } from './manage-subjects.component';
import { ManageSubjectsRoutingModule } from './manage-subjects-routing.module';



@NgModule({
  declarations: [
    ManageSubjectsComponent
  ],
  imports: [
    CommonModule,
    ManageSubjectsRoutingModule
  ]
})
export class ManageSubjectsModule { }
