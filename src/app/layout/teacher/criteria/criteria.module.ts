import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriteriaComponent } from './criteria.component';
import { CriteriaRoutingModule } from './criteria-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CriteriaComponent
  ],
  imports: [
    CommonModule,
    CriteriaRoutingModule,
    ComponentsModule,
    FormsModule
    
  ]
})
export class CriteriaModule { }
