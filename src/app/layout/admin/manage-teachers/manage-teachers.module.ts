import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageTeachersComponent } from './manage-teachers.component';
import { ManageTeachersRoutingModule } from './manage-teachers-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';




@NgModule({
  declarations: [
    ManageTeachersComponent
  ],
  imports: [
    CommonModule,
    ManageTeachersRoutingModule,
    ComponentsModule,
    
  ]
})
export class ManageTeachersModule { }
