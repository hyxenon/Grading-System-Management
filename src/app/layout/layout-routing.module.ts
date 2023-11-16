import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      // {
      //   path: '',
      //   redirectTo: 'admin/dashboard', pathMatch: 'prefix'
      // },
     // Admin Routes
     {
      path: 'admin/dashboard',
      loadChildren: () => import('./admin/dashboard/dashboard.module').then(mod => mod.DashboardModule)
    },
    {
      path: 'admin/manage-class',
      loadChildren: () => import('./admin/manage-class/manage-class.module').then(mod => mod.ManageClassModule)
    },
    {
      path: 'admin/manage-class/:id',
      loadChildren: () => import('./admin/manage-class/manage-class.module').then(mod => mod.ManageClassModule)
    },
    {
      path: 'admin/manage-subjects',
      loadChildren: () => import('./admin/manage-subjects/manage-subjects.module').then(mod => mod.ManageSubjectsModule)
    },
    {
      path: 'admin/manage-subjects/:id',
      loadChildren: () => import('./admin/manage-subjects/manage-subjects.module').then(mod => mod.ManageSubjectsModule)
    },
    {
      path: 'admin/manage-teachers',
      loadChildren: () => import('./admin/manage-teachers/manage-teachers.module').then(mod => mod.ManageTeachersModule)
    },
    {
      path: 'admin/manage-teachers/:id',
      loadChildren: () => import('./admin/manage-teachers/manage-teachers.module').then(mod => mod.ManageTeachersModule)
    },
    {
      path: 'admin/manage-students',
      loadChildren: () => import('./admin/manage-student/manage-student.module').then(mod => mod.ManageStudentModule)
    },
    {
      path: 'admin/manage-students/:id',
      loadChildren: () => import('./admin/manage-student/manage-student.module').then(mod => mod.ManageStudentModule)
    },

    // Teacher Routes
    {
      path: 'teacher/dashboard',
      loadChildren: () => import('./teacher/teacher-dashboard/teacher-dashboard.module').then(mod => mod.TeacherDashboardModule)
    },
    {
      path: 'teacher/class',
      loadChildren: () => import('./teacher/class/class.module').then(mod => mod.ClassModule)
    },

    // Student Routes
    {
      path: 'student/dashboard',
      loadChildren: () => import('./student/student-dashboard/sudent-dashboard.module').then(mod => mod.SudentDashboardModule)
    },
    {
      path: 'student/class',
      loadChildren: () => import('./student/student-class/student-class.module').then(mod => mod.StudentClassModule)
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
