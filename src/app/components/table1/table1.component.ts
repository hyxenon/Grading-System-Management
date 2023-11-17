import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectModel } from 'src/app/model/SubjectModel.model';
import { SubjectsService } from 'src/app/services/subjects.service';

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.scss']
})
export class Table1Component {
  @Input() users: SubjectModel[] = []

  constructor(private subjectService: SubjectsService,private router: Router){}

  onEdit(id: string){
    this.subjectService.isEdit.next(true)
    this.router.navigate(['/admin/manage-subjects/' + id])
  }
}
