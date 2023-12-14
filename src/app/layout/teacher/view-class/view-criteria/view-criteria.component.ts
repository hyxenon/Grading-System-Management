import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Student } from 'src/app/model/Student.model';
import { criteria } from 'src/app/model/criteria.model';
import { ViewClassService } from 'src/app/services/view-class.service';

@Component({
  selector: 'app-view-criteria',
  templateUrl: './view-criteria.component.html',
  styleUrls: ['./view-criteria.component.scss']
})
export class ViewCriteriaComponent implements OnInit, OnDestroy {
  criteriaId !: string
  criteria !: criteria
  criteriaIdSubscription !: Subscription
  routeSubscription!: Subscription;
  classId!: string
  classIdSubscription!: Subscription
  students !: Student[]
  studentsSubscription !: Subscription

  constructor(private viewClassService: ViewClassService, private route: ActivatedRoute){}
  
  ngOnInit(): void {
  this.routeSubscription = this.route.params.subscribe(params => {
    const id = params['id'];
    this.criteriaId = id
  });

  this.viewClassService.getOneCriteria(this.criteriaId)
  .subscribe(data => {
    this.criteria = data.selectedCriteria
  })

  this.classIdSubscription = this.viewClassService.classId.subscribe(data => {
    this.classId = data
  })
  
  this.viewClassService.getStudentClass(this.classId)
  this.studentsSubscription = this.viewClassService.students.subscribe(data => {
    this.students = data
  })
  }

  ngOnDestroy(): void {
  this.routeSubscription.unsubscribe();
  }
}
