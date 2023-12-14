import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/model/Student.model';
import { criteria } from 'src/app/model/criteria.model';
import { UsersStudentService } from 'src/app/services/users-student.service';
import { ViewClassService } from 'src/app/services/view-class.service';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit, OnDestroy {
  classId !: string
  classCriteria !: criteria[]
  classCriteriaSubscription !: Subscription
  classIdSubscription!: Subscription
  student !: Student

  user!: {
    name: string,
    email: string,
    strand: string,
    _id: string
  } 

  

  getScoreForStudent(scores: { studentId: string, score: number }[], studentId: string): string {
    const matchingScore = scores.find(score => score.studentId === studentId);
  
    return matchingScore ? matchingScore.score.toString() : 'N/A'; 
  }

  
  constructor(private viewClassService: ViewClassService, private router: Router, private userStudentService: UsersStudentService){}
  ngOnInit(): void {
    const storedValue = localStorage.getItem('ngx-webstorage|user')
    let parsedValue
    if(storedValue){
      parsedValue = JSON.parse(storedValue)
    }
    this.user = parsedValue

    this.userStudentService.getStudent(this.user._id).subscribe(data => {
      this.student = data
      
    })
    this.classIdSubscription = this.viewClassService.classId.subscribe(data => {
      this.classId = data
    })

    this.viewClassService.getCriteriaClass(this.classId)
    this.classCriteriaSubscription = this.viewClassService.criteriaClass.subscribe(data => {
      this.classCriteria = data
    })
  }

  ngOnDestroy(): void {
    this.classIdSubscription.unsubscribe()
    this.classCriteriaSubscription.unsubscribe()
  }
}
