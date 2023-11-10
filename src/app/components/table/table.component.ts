import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userCreate } from 'src/app/model/userCreate.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent{

  
  @Input() users!: userCreate[]
  @Input() position!: string
  

  constructor(private router: Router){}

  onEdit(id: string){
    if(this.position === 'teacher'){
      this.router.navigate(['/admin/manage-teachers/' + id])
    } else{
      this.router.navigate(['/admin/manage-students/' + id])
    }
    
  }
}
