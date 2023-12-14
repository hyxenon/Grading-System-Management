import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewCriteriaComponent } from './view-criteria.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { TextEntryComponent } from './text-entry/text-entry.component';

const routes: Routes = [
  {
    path: "",
    component: ViewCriteriaComponent,

    children: [
      {
        path: 'file-upload',
        component: FileUploadComponent
      },
      {
        path: 'text-entry',
        component: TextEntryComponent
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
export class ViewCriteriaRoutingModule { }
