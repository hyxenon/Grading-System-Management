import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewClassComponent } from './view-class.component';
import { ViewClassRoutingModule } from './view-class-routing.module';
import { AssignmentsComponent } from './assignments/assignments.component';
import { PeopleComponent } from './people/people.component';
import { GradesComponent } from './grades/grades.component';
import { ComponentsModule } from 'src/app/components/components.module';




@NgModule({
  declarations: [
    ViewClassComponent,
    AssignmentsComponent,
    PeopleComponent,
    GradesComponent,

  ],
  imports: [
    CommonModule,
    ViewClassRoutingModule,
    ComponentsModule
  ]
})
export class ViewClassModule { }
