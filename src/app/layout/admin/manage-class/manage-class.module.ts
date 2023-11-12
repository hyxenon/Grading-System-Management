import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageClassComponent } from './manage-class.component';
import { ManageClassRoutingModule } from './manage-class-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    ManageClassComponent,
  ],
  imports: [
    CommonModule,
    ManageClassRoutingModule,
    ComponentsModule
  ]
})
export class ManageClassModule { }
