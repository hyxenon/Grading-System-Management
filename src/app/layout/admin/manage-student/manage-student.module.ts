import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageStudentComponent } from './manage-student.component';
import { ManageStudentRoutingModule } from './manage-student-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    ManageStudentComponent
  ],
  imports: [
    CommonModule,
    ManageStudentRoutingModule,
    ComponentsModule
  ]
})
export class ManageStudentModule { }
