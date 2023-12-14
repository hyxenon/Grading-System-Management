import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewClassComponent } from './view-class.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { PeopleComponent } from './people/people.component';
import { GradesComponent } from './grades/grades.component';
import { ViewCriteriaComponent } from './view-criteria/view-criteria.component';

const routes: Routes = [
  {
    path: "",
    component: ViewClassComponent,

    children: [
      {
        path: "assignments",
        component: AssignmentsComponent
      },
      {
        path: "people",
        component: PeopleComponent
      },
      {
        path: "grades",
        component: GradesComponent
      },
      {
        path: "view-criteria/:id",
        component: ViewCriteriaComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]  
})
export class ViewClassRoutingModule { }
