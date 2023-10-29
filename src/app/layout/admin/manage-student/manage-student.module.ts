import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageStudentComponent } from './manage-student.component';
import { ManageStudentRoutingModule } from './manage-student-routing.module';



@NgModule({
  declarations: [
    ManageStudentComponent
  ],
  imports: [
    CommonModule,
    ManageStudentRoutingModule
  ]
})
export class ManageStudentModule { }
