import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewClassComponent } from './view-class.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { PeopleComponent } from './people/people.component';
import { GradesComponent } from './grades/grades.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ViewCriteriaComponent } from './view-criteria/view-criteria.component';
import { ViewClassRoutingModule } from './view-class-routing.module';




@NgModule({
  declarations: [
    ViewClassComponent,
    AssignmentsComponent,
    PeopleComponent,
    GradesComponent,
    ViewCriteriaComponent,

  ],
  imports: [
    CommonModule,
    ViewClassRoutingModule,
    ComponentsModule
  ]
})
export class ViewClassModule { }
