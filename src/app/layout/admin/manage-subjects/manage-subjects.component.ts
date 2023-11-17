import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubjectModel } from 'src/app/model/SubjectModel.model';
import { SubjectsService } from 'src/app/services/subjects.service';

@Component({
  selector: 'app-manage-subjects',
  templateUrl: './manage-subjects.component.html',
  styleUrls: ['./manage-subjects.component.scss']
})
export class ManageSubjectsComponent implements OnInit, OnDestroy {
  allSubjects: SubjectModel[] = []
  allSubjectsSubscription!: Subscription

  constructor(private subjectsService: SubjectsService){}

  ngOnInit(): void {
    this.subjectsService.getSubjects()
    this.allSubjectsSubscription = this.subjectsService.subjects.subscribe((data) => {
      this.allSubjects = data
    })
  }

  ngOnDestroy(): void {
    this.allSubjectsSubscription.unsubscribe()
  }

  onEdit(){
    this.subjectsService.isEdit.next(false)
  }
}
