import { Component, OnDestroy, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Subscription } from 'rxjs';
import { userTeacher } from 'src/app/model/userTeacher.model';
import { UsersStudentService } from 'src/app/services/users-student.service';

@Component({
  selector: 'app-manage-student',
  templateUrl: './manage-student.component.html',
  styleUrls: ['./manage-student.component.scss']
})
export class ManageStudentComponent implements OnInit, OnDestroy {
  userStudents: userTeacher[] = []
  userStudentsSubscription!: Subscription
  constructor(private userStudentService: UsersStudentService){}

  ngOnInit() {
    initFlowbite()
    this.userStudents = this.userStudentService.getStudents()
    this.userStudentsSubscription = this.userStudentService.userTeachers.subscribe((data) => {
      this.userStudents = data
    })
    }

  ngOnDestroy(): void {
      this.userStudentsSubscription.unsubscribe()
  }
}
