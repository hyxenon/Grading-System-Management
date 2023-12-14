import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewCriteriaComponent } from './view-criteria.component';
import { ViewCriteriaRoutingModule } from './view-criteria-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { TextEntryComponent } from './text-entry/text-entry.component';



@NgModule({
  declarations: [
    ViewCriteriaComponent,
    FileUploadComponent,
    TextEntryComponent
  ],
  imports: [
    CommonModule,
    ViewCriteriaRoutingModule,
    ComponentsModule,
  ]
})
export class ViewCriteriaModule { }
