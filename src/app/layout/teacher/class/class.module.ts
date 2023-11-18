import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassComponent } from './class.component';
import { ClassRoutingModule } from './class-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    ClassComponent
  ],
  imports: [
    CommonModule,
    ClassRoutingModule,
    ComponentsModule
  ]
})
export class ClassModule { }
