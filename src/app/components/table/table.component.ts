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
  @Input() position!: string
  

  constructor(private userTeacherService: UsersTeacherService ,private router: Router){}

  onEdit(id: string){
    if(this.position === 'teacher'){
      this.userTeacherService.isEdit.next(true)
      this.router.navigate(['/admin/manage-teachers/' + id])
    } else{
      this.router.navigate(['/admin/manage-students/' + id])
    }
    
  }
}
