import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { classModel } from 'src/app/model/classModel.model';
import { subject } from 'src/app/model/subject.model';
import { ManageClassService } from 'src/app/services/manage-class.service';
import { SubjectsService } from 'src/app/services/subjects.service';

@Component({
  selector: 'app-student-class',
  templateUrl: './student-class.component.html',
  styleUrls: ['./student-class.component.scss']
})
export class StudentClassComponent {
  classes : classModel[] = []
  classesSubscription!: Subscription

  user!: {
    name: string,
    email: string,
    strand: string,
    _id: string
  } 
 
  constructor(private classService: ManageClassService){}
  
  ngOnInit(): void {
    const storedValue = localStorage.getItem('ngx-webstorage|user')
    let parsedValue
    if(storedValue){
      parsedValue = JSON.parse(storedValue)
    }
    this.user = parsedValue
    
    this.classService.getStudentClass(this.user._id)

    this.classesSubscription = this.classService.classesByStudent.subscribe(data => {
      this.classes = data
      
    })

  
  }


  ngOnDestroy(): void {
    this.classesSubscription.unsubscribe()
  }
}
