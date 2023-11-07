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

  constructor(private userStudentService: UsersStudentService){}

  ngOnInit() {
    initFlowbite()

    }

  ngOnDestroy(): void {
      
  }
}
