import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsComponent } from './subjects.component';
import { SubjectsRoutingModule } from './subjects-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    SubjectsComponent
  ],
  imports: [
    CommonModule,
    SubjectsRoutingModule,
    ComponentsModule
  ]
})
export class SubjectsModule { }
