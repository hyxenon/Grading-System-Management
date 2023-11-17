import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { classModel } from 'src/app/model/classModel.model';
import { ManageClassService } from 'src/app/services/manage-class.service';

@Component({
  selector: 'app-manage-class',
  templateUrl: './manage-class.component.html',
  styleUrls: ['./manage-class.component.scss']
})
export class ManageClassComponent implements OnInit, OnDestroy {
  allClass: classModel[] = []
  allClassSubscription!: Subscription

  constructor(private classService: ManageClassService){}

  ngOnInit(): void {
    this.classService.getClasses()
    this.allClassSubscription = this.classService.classes.subscribe((data) => {
      this.allClass = data
    })
  }

  ngOnDestroy(): void {
    
  }

  onEdit(){
    this.classService.isEdit.next(false)
  }
}
