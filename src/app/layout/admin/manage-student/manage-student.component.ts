import { Component, OnDestroy, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Subscription } from 'rxjs';
import { adminData } from 'src/app/model/adminData.model';
import { userCreate } from 'src/app/model/userCreate.model';
import { AdminDataService } from 'src/app/services/admin-data.service';
import { UsersStudentService } from 'src/app/services/users-student.service';

@Component({
  selector: 'app-manage-student',
  templateUrl: './manage-student.component.html',
  styleUrls: ['./manage-student.component.scss']
})
export class ManageStudentComponent implements OnInit, OnDestroy {

  userStudents: userCreate[] = []
  totalUsers !: adminData
  totalUsersSubscription !: Subscription
  userStudentsSubscription!: Subscription
  constructor(private userStudentService: UsersStudentService, private adminDataService: AdminDataService){}

  ngOnInit() {
    initFlowbite()
      this.userStudentService.getStudents()
      this.userStudentsSubscription = this.userStudentService.userStudents.subscribe((data) => {
        this.userStudents = data
      })
      this.adminDataService.getAdminData()
      this.totalUsersSubscription = this.adminDataService.adminDatas.subscribe(data => {
        this.totalUsers = data
      })
    }

  ngOnDestroy(): void {
    this.userStudentsSubscription.unsubscribe()  
  } 

  onEdit(){
    this.userStudentService.isEdit.next(false)
  }
}
