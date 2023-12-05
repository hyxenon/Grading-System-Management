import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { classModel } from 'src/app/model/classModel.model';
import { ViewClassService } from 'src/app/services/view-class.service';

@Component({
  selector: 'app-view-class',
  templateUrl: './view-class.component.html',
  styleUrls: ['./view-class.component.scss']
})
export class ViewClassComponent implements OnInit, OnDestroy {
  _class !: classModel
  classId !: string
  classSubscription!: Subscription

  constructor(private viewClassService: ViewClassService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const classId = params.get('id');
      if(classId){
      this.classId = classId
      }
    });
    this.viewClassService.getClass(this.classId)
    this.classSubscription = this.viewClassService._class.subscribe(data => {
      this._class = data
      
    })
  }

  ngOnDestroy(): void {
    this.classSubscription.unsubscribe()
  }
  
}
