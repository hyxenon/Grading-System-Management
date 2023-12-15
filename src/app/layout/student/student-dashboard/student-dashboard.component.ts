import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { classModel } from 'src/app/model/classModel.model';
import { ManageClassService } from 'src/app/services/manage-class.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit, OnDestroy {
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
      const uniqueCombinations = new Map();
      const uniqueData = data.filter((item) => {
        const key = `${item.subjectCode}-${item.subjectDescription}`;
      
        // If the key is not in the Map, add it and return true to keep the item
        if (!uniqueCombinations.has(key)) {
          uniqueCombinations.set(key, true);
          return true;
        }
      
        // If the key is already in the Map, return false to exclude the item
        return false;
      });
      this.classes = uniqueData
    })
  }

  ngOnDestroy(): void {
    this.classesSubscription.unsubscribe()
  }
}
