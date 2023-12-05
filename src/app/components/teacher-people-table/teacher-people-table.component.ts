import { Component, Input } from '@angular/core';
import { Student } from 'src/app/model/Student.model';

@Component({
  selector: 'app-teacher-people-table',
  templateUrl: './teacher-people-table.component.html',
  styleUrls: ['./teacher-people-table.component.scss']
})
export class TeacherPeopleTableComponent {
  @Input() students !: Student[]
}
