import { Component, Input, OnInit } from '@angular/core';
import { userTeacher } from 'src/app/model/userTeacher.model';
import { UsersTeacherService } from 'src/app/services/users-teacher.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent{

  @Input() email!: string
  @Input() firstName!: string
  @Input() lastName!: string
  @Input() position!:string
  @Input() status!:boolean
  @Input() users!: userTeacher[]

}
