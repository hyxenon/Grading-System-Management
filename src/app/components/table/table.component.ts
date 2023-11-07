import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userCreate } from 'src/app/model/userCreate.model';
import { UsersTeacherService } from 'src/app/services/users-teacher.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent{

  
  @Input() users!: userCreate[]
  

  constructor(private router: Router){}

  // onEdit(id: string){
  //   this.router.navigate(['/admin/manage-teachers/edit/' + id])
  // }
}
