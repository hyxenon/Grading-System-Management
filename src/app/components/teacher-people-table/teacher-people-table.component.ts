import { Component, Input } from '@angular/core';
import { Student } from 'src/app/model/Student.model';
import { ViewClassService } from 'src/app/services/view-class.service';

@Component({
  selector: 'app-teacher-people-table',
  templateUrl: './teacher-people-table.component.html',
  styleUrls: ['./teacher-people-table.component.scss']
})
export class TeacherPeopleTableComponent {
  @Input() students !: Student[]
  @Input() classId!: string
  constructor(private viewClassService: ViewClassService){}
  onRemoveStudent(studentId: string){
   this.viewClassService.deleteStudentClass(this.classId, studentId)
  }
}
