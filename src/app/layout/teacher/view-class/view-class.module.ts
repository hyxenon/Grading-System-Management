import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewClassComponent } from './view-class.component';
import { ViewClassRoutingModule } from './view-class-routing.module';



@NgModule({
  declarations: [
    ViewClassComponent
  ],
  imports: [
    CommonModule,
    ViewClassRoutingModule
  ]
})
export class ViewClassModule { }
