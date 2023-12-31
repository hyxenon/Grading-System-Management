import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageSubjectsComponent } from './manage-subjects.component';
import { ManageSubjectsRoutingModule } from './manage-subjects-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    ManageSubjectsComponent
  ],
  imports: [
    CommonModule,
    ManageSubjectsRoutingModule,
    ComponentsModule
  ]
})
export class ManageSubjectsModule { }
