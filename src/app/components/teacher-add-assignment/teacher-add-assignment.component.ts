import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CriteriaType } from 'src/app/model/criteriaType.model';
import { CriteriaService } from 'src/app/services/criteria.service';
import { ViewClassService } from 'src/app/services/view-class.service';

@Component({
  selector: 'app-teacher-add-assignment',
  templateUrl: './teacher-add-assignment.component.html',
  styleUrls: ['./teacher-add-assignment.component.scss']
})
export class TeacherAddAssignmentComponent implements OnInit, OnDestroy {
  @ViewChild('f') form!: NgForm
  classId !: string
  classIdSubscription!: Subscription
  hour !: string
  amPm !: string
  month !: string
  year !: string
  criteriasType !: CriteriaType[]
  criteriasTypeSubscription !: Subscription

  constructor(private viewClassService: ViewClassService, private criteriaService: CriteriaService){}

  ngOnInit(): void {
    this.classIdSubscription = this.viewClassService.classId.subscribe(data => {
      this.classId = data
    })
    this.criteriaService.getCriteriaTypes(this.classId)
    this.criteriasTypeSubscription = this.criteriaService.criteriaTypes.subscribe(data => {
      this.criteriasType = data
    })

  }

  ngOnDestroy(): void {
    this.classIdSubscription.unsubscribe()
    this.criteriasTypeSubscription.unsubscribe()
  }
  onSubmit(){
    if(this.form.valid){
      const deadline = `${this.hour} ${this.amPm} ${this.month} ${this.year}`
      this.viewClassService.addCriteriaClass(this.classId, this.form.value.criteriaName, this.form.value.criteriaDescription, this.form.value.type, deadline, true)
      this.form.reset()
    } else {
      alert("Please complete the Input Field")
    }
  }
}
