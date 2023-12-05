import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/model/Student.model';
import { ViewClassService } from 'src/app/services/view-class.service';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit, OnDestroy {
  students !: Student[]
  classId !: string
  classIdSubscription!: Subscription
  studentsSubscription!: Subscription
  
  constructor(private viewClassService: ViewClassService){}
  
  ngOnInit(): void {
    this.classIdSubscription = this.viewClassService.classId.subscribe(data => {
      this.classId = data
    })
    this.viewClassService.getStudentClass(this.classId)
    this.studentsSubscription = this.viewClassService.students.subscribe(data => {
      this.students = data
    })
  }

  ngOnDestroy(): void {
    this.studentsSubscription.unsubscribe()
  }
}
