import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { subject } from 'src/app/model/subject.model';
import { SubjectsService } from 'src/app/services/subjects.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit, OnDestroy {
  subjects!: subject[]
  subjectsSubscription!: Subscription
  user!: {
    name: string,
    email: string,
    strand: string
  } 

  constructor(private subjectService: SubjectsService){}
  ngOnInit(): void {
    const storedValue = localStorage.getItem('ngx-webstorage|user')
    let parsedValue
    if(storedValue){
      parsedValue = JSON.parse(storedValue)
    }
    this.user = parsedValue
    
    this.subjectService.getSubjectsByStrand(this.user.strand, 'teacher')

    this.subjectsSubscription = this.subjectService.subjectsByStrand.subscribe((data) => {
      this.subjects = data
    })
  }

  ngOnDestroy(): void {
    this.subjectsSubscription.unsubscribe()
  }
}
