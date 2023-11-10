import { Component, OnDestroy, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Subscription } from 'rxjs';
import { userCreate } from 'src/app/model/userCreate.model';
import { UsersStudentService } from 'src/app/services/users-student.service';

@Component({
  selector: 'app-manage-student',
  templateUrl: './manage-student.component.html',
  styleUrls: ['./manage-student.component.scss']
})
export class ManageStudentComponent implements OnInit, OnDestroy {

  userStudents: userCreate[] = []
  userStudentsSubscription!: Subscription
  constructor(private userStudentService: UsersStudentService){}

  ngOnInit() {
    initFlowbite()
      this.userStudentService.getStudents()
      this.userStudentsSubscription = this.userStudentService.userStudents.subscribe((data) => {
        this.userStudents = data
      })
    }

  ngOnDestroy(): void {
    this.userStudentsSubscription.unsubscribe()  
  } 
}
