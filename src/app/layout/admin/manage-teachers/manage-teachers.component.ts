import { Component, OnDestroy, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Subscription } from 'rxjs';
import { userCreate } from 'src/app/model/userCreate.model';
import { UsersTeacherService } from 'src/app/services/users-teacher.service';



@Component({
  selector: 'app-manage-teachers',
  templateUrl: './manage-teachers.component.html',
  styleUrls: ['./manage-teachers.component.scss']
})
export class ManageTeachersComponent implements OnInit, OnDestroy {
  
  userTeachers: userCreate[] = []
  userTeachersSubscription!: Subscription
  constructor(private userTeacherService: UsersTeacherService){}

  ngOnInit() {
    initFlowbite()
    this.userTeacherService.getTeachers()
    this.userTeachersSubscription = this.userTeacherService.userTeachers.subscribe((data) => {
      this.userTeachers = data
    })
    }

  ngOnDestroy(): void {
      this.userTeachersSubscription.unsubscribe()
  }

  
}
