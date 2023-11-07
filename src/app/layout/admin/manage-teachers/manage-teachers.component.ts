import { Component, OnDestroy, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Subscription } from 'rxjs';
import { userTeacher } from 'src/app/model/userTeacher.model';
import { UsersTeacherService } from 'src/app/services/users-teacher.service';



@Component({
  selector: 'app-manage-teachers',
  templateUrl: './manage-teachers.component.html',
  styleUrls: ['./manage-teachers.component.scss']
})
export class ManageTeachersComponent implements OnInit, OnDestroy {
  
  userTeachers: userTeacher[] = []
  userTeachersSubscription!: Subscription
  constructor(private userTeacherService: UsersTeacherService){}

  ngOnInit() {
    initFlowbite()
    this.userTeachers = this.userTeacherService.getTeachers()
    this.userTeachersSubscription = this.userTeacherService.userTeachers.subscribe((data) => {
      this.userTeachers = data
    })
    }

  ngOnDestroy(): void {
      this.userTeachersSubscription.unsubscribe()
  }

  
}
