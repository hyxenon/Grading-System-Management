import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageTeachersComponent } from './manage-teachers.component';
import { ManageTeachersRoutingModule } from './manage-teachers-routing.module';



@NgModule({
  declarations: [
    ManageTeachersComponent
  ],
  imports: [
    CommonModule,
    ManageTeachersRoutingModule
  ]
})
export class ManageTeachersModule { }
