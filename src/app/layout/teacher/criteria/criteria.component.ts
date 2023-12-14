import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { classModel } from 'src/app/model/classModel.model';
import { CriteriaType } from 'src/app/model/criteriaType.model';
import { CriteriaService } from 'src/app/services/criteria.service';
import { ManageClassService } from 'src/app/services/manage-class.service';

@Component({
  selector: 'app-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.scss']
})
export class CriteriaComponent implements OnInit, OnDestroy {
  @ViewChild('f') form !: NgForm
  classes : classModel[] = []
  classesSubscription!: Subscription
  selectedClass: string = '';
  criteriaTypes : CriteriaType[] = []
  criteriaTypesSubscription !: Subscription
  _isEdit : boolean = false
  criteriaTypeId !: string
  constructor(private classService: ManageClassService, private criteriaService: CriteriaService){}


  user!: {
    name: string,
    email: string,
    strand: string,
    _id: string
  } 

  ngOnInit(): void {
    const storedValue = localStorage.getItem('ngx-webstorage|user')
    let parsedValue
    if(storedValue){
      parsedValue = JSON.parse(storedValue)
    }
    this.user = parsedValue
    this.classService.getClassesByTeacher(this.user._id)


    this.classesSubscription = this.classService.classesByTeacher.subscribe(data => {
      this.classes = data
    })

    this.criteriaTypesSubscription = this.criteriaService.criteriaTypes.subscribe(data => {
      this.criteriaTypes = data
    })

  }


  ngOnDestroy(): void {
    this.classesSubscription.unsubscribe()
  }

  onChange(){
    this.criteriaService.getCriteriaTypes(this.selectedClass)
  }

  onSubmit(){
    if(this.form.valid){
      console.log(this.form.value.criteriaName);
      console.log(this.form.value.percentage);
      this.criteriaService.addCriteria(this.selectedClass, this.form.value.criteriaName, this.form.value.percentage)
      this.form.reset()
    } else {
      alert("Please Input the field or make sure the percentage is maximum of 100.")
    }
  }

  isEdit(criteriaTypeId: string){
    this._isEdit = true
    this.criteriaTypeId = criteriaTypeId
    
  }

  closeEdit(){
    this._isEdit = false
  }

  deleteCriteria(){
    this.criteriaService.deleteCriteriaType(this.selectedClass, this.criteriaTypeId)
  }
}
