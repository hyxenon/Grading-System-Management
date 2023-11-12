import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { TableComponent } from './table/table.component';
import { AddFormComponent } from './add-form/add-form.component';
import { StatsComponent } from './stats/stats.component';
import { FormsModule } from '@angular/forms';
import { EditFormComponent } from './edit-form/edit-form.component';
import { AddClassComponent } from './add-class/add-class.component';




@NgModule({
  declarations: [
    CardsComponent,
    TableComponent,
    AddFormComponent,
    StatsComponent,
    EditFormComponent,
    AddClassComponent,

  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CardsComponent,
    TableComponent,
    AddFormComponent,
    StatsComponent,
    EditFormComponent,
    AddClassComponent,
  ]
})
export class ComponentsModule { }
