import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewClassComponent } from './view-class.component';
import { ViewClassRoutingModule } from './view-class-routing.module';
import { AssignmentsComponent } from './assignments/assignments.component';
import { PeopleComponent } from './people/people.component';
import { GradesComponent } from './grades/grades.component';



@NgModule({
  declarations: [
    ViewClassComponent,
    AssignmentsComponent,
    PeopleComponent,
    GradesComponent
  ],
  imports: [
    CommonModule,
    ViewClassRoutingModule
  ]
})
export class ViewClassModule { }
