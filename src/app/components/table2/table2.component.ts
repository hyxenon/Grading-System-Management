import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { classModel } from 'src/app/model/classModel.model';
import { ManageClassService } from 'src/app/services/manage-class.service';

@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.scss']
})
export class Table2Component {
  @Input() users: classModel[] = []

  constructor(private classService: ManageClassService,private router: Router){}

  onEdit(id: string){
    this.classService.isEdit.next(true)
    this.router.navigate(['/admin/manage-class/' + id])
  }
}
