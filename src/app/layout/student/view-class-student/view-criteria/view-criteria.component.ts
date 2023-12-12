import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { criteria } from 'src/app/model/criteria.model';
import { CriteriaService } from 'src/app/services/criteria.service';
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
  studentScore !: number
  user!: {
    name: string,
    email: string,
    strand: string,
    _id: string
  } 



  constructor(private viewClassService: ViewClassService, private route: ActivatedRoute, private criteriaService: CriteriaService){}
  
  ngOnInit(): void {
  const storedValue = localStorage.getItem('ngx-webstorage|user')
  let parsedValue
  if(storedValue){
    parsedValue = JSON.parse(storedValue)
  }
  this.user = parsedValue

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

 
  
   this.criteriaService.getScoreStudentCriteria(this.classId, this.criteriaId, this.user._id)
   .subscribe(data => {
    this.studentScore = data.selectedScore.score
   })

  
  
  }

  ngOnDestroy(): void {
  this.routeSubscription.unsubscribe();
  }
}
