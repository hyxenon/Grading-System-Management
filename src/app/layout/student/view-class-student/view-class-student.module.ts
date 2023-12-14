import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewClassRoutingModule } from '../../teacher/view-class/view-class-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { ViewClassStudentComponent } from './view-class-student.component';
import { ViewClassStudentRoutingModule } from './view-class-student-routing.module';
import { AssignmentsComponent } from './assignments/assignments.component';
import { GradesComponent } from './grades/grades.component';
import { PeopleComponent } from './people/people.component';




@NgModule({
  declarations: [ViewClassStudentComponent, AssignmentsComponent, GradesComponent, PeopleComponent],
  imports: [
    CommonModule,
    ViewClassStudentRoutingModule,
    ComponentsModule,

  ]
})
export class ViewClassStudentModule { }
