import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { TableComponent } from './table/table.component';
import { AddFormComponent } from './add-form/add-form.component';
import { StatsComponent } from './stats/stats.component';
import { FormsModule } from '@angular/forms';
import { AddClassComponent } from './add-class/add-class.component';
import { AddStudentFormComponent } from './add-student-form/add-student-form.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { Table1Component } from './table1/table1.component';
import { Table2Component } from './table2/table2.component';

import { CardClassComponent } from './card-class/card-class.component';
import { SubjectCardComponent } from './subject-card/subject-card.component';
import { AddClassTeacherComponent } from './add-class-teacher/add-class-teacher.component';
import { AddTeacherStudentComponent } from './add-teacher-student/add-teacher-student.component';
import { TeacherPeopleTableComponent } from './teacher-people-table/teacher-people-table.component';
import { TeacherAddAssignmentComponent } from './teacher-add-assignment/teacher-add-assignment.component';
import { ViewCriteriaTableComponent } from './view-criteria-table/view-criteria-table.component';





@NgModule({
  declarations: [
    CardsComponent,
    TableComponent,
    AddFormComponent,
    StatsComponent,
    AddClassComponent,
    AddStudentFormComponent,
    AddSubjectComponent,
    Table1Component,
    Table2Component,
    CardClassComponent,
    SubjectCardComponent,
    AddClassTeacherComponent,
    AddTeacherStudentComponent,
    TeacherPeopleTableComponent,
    TeacherAddAssignmentComponent,
    ViewCriteriaTableComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CardsComponent,
    TableComponent,
    AddFormComponent,
    StatsComponent,
    AddClassComponent,
    AddStudentFormComponent,
    AddSubjectComponent,
    Table1Component,
    Table2Component,
    CardClassComponent,
    SubjectCardComponent,
    AddClassTeacherComponent,
    AddTeacherStudentComponent,
    TeacherPeopleTableComponent,
    TeacherAddAssignmentComponent,
    ViewCriteriaTableComponent,
  ]
})
export class ComponentsModule { }
