import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/model/Student.model';
import { classModel } from 'src/app/model/classModel.model';
import { ViewClassService } from 'src/app/services/view-class.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit, OnDestroy {
  _class !: classModel
  classSubscription!: Subscription
  classId!: string
  classIdSubscription!: Subscription
  students!: Student[]
  studentsSubscription !: Subscription

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
    this.classIdSubscription.unsubscribe()
    this.studentsSubscription.unsubscribe()
  }
}
