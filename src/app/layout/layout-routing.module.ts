import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard', pathMatch: 'prefix'
      },
     // Admin Routes
     {
      path: 'admin/dashboard',
      loadChildren: () => import('./admin/dashboard/dashboard.module').then(mod => mod.DashboardModule)
    },
    {
      path: 'admin/manage-schoolyear',
      loadChildren: () => import('./admin/manage-schoolyear/manage-schoolyear.module').then(mod => mod.ManageSchoolyearModule)
    },
    {
      path: 'admin/manage-subjects',
      loadChildren: () => import('./admin/manage-subjects/manage-subjects.module').then(mod => mod.ManageSubjectsModule)
    },
    {
      path: 'admin/manage-teachers',
      loadChildren: () => import('./admin/manage-teachers/manage-teachers.module').then(mod => mod.ManageTeachersModule)
    },
    {
      path: 'admin/manage-students',
      loadChildren: () => import('./admin/manage-student/manage-student.module').then(mod => mod.ManageStudentModule)
    },
      
    ]
  },
  
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
