import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersStudentService } from 'src/app/services/users-student.service';
import { UsersTeacherService } from 'src/app/services/users-teacher.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent {
  @Input() role!: string
  @ViewChild('f') loginForm!: NgForm

  constructor(private userTeacherService: UsersTeacherService, private userStudentService: UsersStudentService){}

  onSubmit(){
    console.log(this.loginForm);

    if(this.loginForm.valid){
      let userEmail = this.loginForm.value.email
      let userFirstName = this.loginForm.value.firstName
      let userLastName = this.loginForm.value.lastName
      let userPassword = this.loginForm.value.password
      let userGender = this.loginForm.value.gender


      // Teacher
      if(this.role === 'Teacher'){
        let userDepartment = this.loginForm.value.department
        this.userTeacherService.addTeacher(userEmail, userFirstName, userLastName, userPassword, userGender, 'Teacher', "Online", userDepartment)
      } else {
        this.userStudentService.addStudent(userEmail, userFirstName, userLastName, userPassword, userGender, 'Student', "Online")
      }


      this.loginForm.reset()
    } else{
      alert('Wrong input')
    }
    
  } 
}
