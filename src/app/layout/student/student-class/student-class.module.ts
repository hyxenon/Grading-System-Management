import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentClassComponent } from './student-class.component';
import { StudentClassRoutingModule } from './student-class-routing.module';



@NgModule({
  declarations: [
    StudentClassComponent
  ],
  imports: [
    CommonModule,
    StudentClassRoutingModule
  ]
})
export class StudentClassModule { }
