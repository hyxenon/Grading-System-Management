import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { classModel } from 'src/app/model/classModel.model';
import { criteria } from 'src/app/model/criteria.model';
import { ViewClassService } from 'src/app/services/view-class.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.scss']
})
export class AssignmentsComponent implements OnInit, OnDestroy {
  classId !: string
  classCriteria !: criteria[]
  classCriteriaSubscription !: Subscription
  classIdSubscription!: Subscription

  constructor(private viewClassService: ViewClassService){}
  ngOnInit(): void {
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

  onDeleteCriteria(criteriaId: string){
    this.viewClassService.deleteCriteriaClass(this.classId, criteriaId)
  }
}
