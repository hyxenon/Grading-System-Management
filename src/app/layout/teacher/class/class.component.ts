import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { classModel } from 'src/app/model/classModel.model';
import { subject } from 'src/app/model/subject.model';
import { ManageClassService } from 'src/app/services/manage-class.service';
import { SubjectsService } from 'src/app/services/subjects.service';


@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit, OnDestroy {
  availableSubjects: subject[] = []
  availableSubjectsSubscription!: Subscription
  classes : classModel[] = []
  classesSubscription!: Subscription

  user!: {
    name: string,
    email: string,
    strand: string,
    _id: string
  } 
 
  constructor(private subjectService: SubjectsService, private classService: ManageClassService){}
  
  ngOnInit(): void {
    const storedValue = localStorage.getItem('ngx-webstorage|user')
    let parsedValue
    if(storedValue){
      parsedValue = JSON.parse(storedValue)
    }
    this.user = parsedValue
    this.subjectService.getSubjectsByStrand(this.user.strand, 'teacher')
    this.classService.getClassesByTeacher(this.user._id)

    this.availableSubjectsSubscription = this.subjectService.subjectsByStrand.subscribe((data) => {
      this.availableSubjects = data
    })

    this.classesSubscription = this.classService.classesByTeacher.subscribe(data => {
      this.classes = data
    })
  
  }


  ngOnDestroy(): void {
    this.availableSubjectsSubscription.unsubscribe()
    this.classesSubscription.unsubscribe()
  }
}
