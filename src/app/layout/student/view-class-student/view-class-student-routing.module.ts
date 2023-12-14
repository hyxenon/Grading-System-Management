import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewClassStudentComponent } from './view-class-student.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { PeopleComponent } from './people/people.component';
import { GradesComponent } from './grades/grades.component';
import { ViewCriteriaComponent } from './view-criteria/view-criteria.component';

const routes: Routes = [
  {
    path: "",
    component: ViewClassStudentComponent,

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
        loadChildren: () => import('./view-criteria/view-criteria.module').then(mod => mod.ViewCriteriaModule)
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ViewClassStudentRoutingModule { }
