import { Component, OnDestroy, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Subscription } from 'rxjs';
import { adminData } from 'src/app/model/adminData.model';
import { userCreate } from 'src/app/model/userCreate.model';
import { AdminDataService } from 'src/app/services/admin-data.service';
import { UsersTeacherService } from 'src/app/services/users-teacher.service';



@Component({
  selector: 'app-manage-teachers',
  templateUrl: './manage-teachers.component.html',
  styleUrls: ['./manage-teachers.component.scss']
})
export class ManageTeachersComponent implements OnInit, OnDestroy {
  
  userTeachers: userCreate[] = []
  totalUsers !: adminData
  totalUsersSubscription !: Subscription
  userTeachersSubscription!: Subscription
  constructor(private userTeacherService: UsersTeacherService, private adminDataService: AdminDataService){}

  ngOnInit() {
    initFlowbite()
    this.userTeacherService.getTeachers()
    this.userTeachersSubscription = this.userTeacherService.userTeachers.subscribe((data) => {
      this.userTeachers = data
    })
    this.adminDataService.getAdminData()
    this.totalUsersSubscription = this.adminDataService.adminDatas.subscribe(data => {
      this.totalUsers = data
    })
    }

  ngOnDestroy(): void {
      this.userTeachersSubscription.unsubscribe()
      this.totalUsersSubscription.unsubscribe()
  }

  onClick(){
    this.userTeacherService.isEdit.next(false)
  }

  
}
