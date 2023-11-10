import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EditForm } from 'src/app/model/editForm.model';
import { UsersStudentService } from 'src/app/services/users-student.service';

import { UsersTeacherService } from 'src/app/services/users-teacher.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {

  userId: string | any
  user!: EditForm | undefined
  

  constructor(private userTeacherService: UsersTeacherService, private userStudentService: UsersStudentService, private route: ActivatedRoute){
}
  onEdit(form: NgForm){
    if(form.valid){
      if(this.user?.position === 'Teacher'){
        this.userTeacherService.updateTeacher(this.userId, form.value.email, form.value.password, form.value.firstName, form.value.lastName, this.user?.position, this.user?.status , this.user?.gender)
      }
      
      if(this.user?.position === 'Student'){
        this.userStudentService.updateStudent(this.userId, form.value.email, form.value.password, form.value.firstName, form.value.lastName, this.user?.position, this.user?.status , this.user?.gender)
      }
      
    }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if(paramMap.has('id')){
        this.userId = paramMap.get('id')
        if(this.userId === 'users'){
          return
        }
        this.userTeacherService.getTeacher(this.userId)
          .subscribe(userData => {
            this.user = {_id: userData._id, email: userData.email, firstName: userData.firstName, lastName: userData.lastName, password: userData.password, gender: userData.gender, status: userData.status, position: userData.position}
          })
      }
    })
  }

  onDelete(){
    if(this.user?.position === 'Teacher'){
      this.userTeacherService.deleteTeacher(this.userId)
    }

    if(this.user?.position === 'Student'){
      this.userStudentService.deleteStudent(this.userId)
    }
    
  }

}
