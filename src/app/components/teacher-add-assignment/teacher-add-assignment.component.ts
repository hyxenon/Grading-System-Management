import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
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

  constructor(private viewClassService: ViewClassService){}

  ngOnInit(): void {
    this.classIdSubscription = this.viewClassService.classId.subscribe(data => {
      this.classId = data
    })
  }

  ngOnDestroy(): void {
    this.classIdSubscription.unsubscribe()
  }
  onSubmit(){
    if(this.form.valid){
      this.viewClassService.addCriteriaClass(this.classId, this.form.value.criteriaName, this.form.value.criteriaDescription, this.form.value.type, this.form.value.deadline)
    } else {
      alert("Please complete the Input Field")
    }
  }
}
