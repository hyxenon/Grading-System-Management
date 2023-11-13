import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Teacher } from 'src/app/model/Teacher.model';
import { UsersStudentService } from 'src/app/services/users-student.service';
import { UsersTeacherService } from 'src/app/services/users-teacher.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  @Input() role!: string
  @ViewChild('f') form!: NgForm

  userId: string | any
  user!: Teacher | undefined
  isEdit = false

  constructor(private userTeacherService: UsersTeacherService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.userTeacherService.isEdit.subscribe((data) => {
      this.isEdit = data
    })

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if(paramMap.has('id')){
        this.userId = paramMap.get('id')
        if(this.userId === 'users'){
          return
        }
        this.userTeacherService.getTeacher(this.userId)
          .subscribe(userData => {
            this.user = {_id: userData._id, email: userData.email, firstName: userData.firstName, lastName: userData.lastName, password: userData.password, gender: userData.gender, status: userData.status, position: userData.position, department: userData.department, classes: userData.classes}
          })
      }
    })
  }

  onSubmit(){
    if(this.form.valid){
      let userEmail = this.form.value.email
      let userFirstName = this.form.value.firstName
      let userLastName = this.form.value.lastName
      let userPassword = this.form.value.password
      let userGender = this.form.value.gender
      let userDepartment = this.form.value.department
      let userStatus = this.form.value.status

      

      if(this.isEdit){
        if(this.user?.position){
          this.userTeacherService.updateTeacher(this.userId, userEmail, userPassword, userFirstName, userLastName, this.user?.position, userStatus , userGender,userDepartment, this?.user.classes)
        }
      } else {
        this.userTeacherService.addTeacher(userEmail, userFirstName, userLastName, userPassword, userGender, 'Teacher', "Online", userDepartment)
      }
      
      this.form.reset()
    } else{
      alert('Wrong input')
    }
  } 

  onClose(){
    this.user = undefined
    this.router.navigate(['/admin/manage-teachers/users'])
  }

  onDelete(){
    this.userTeacherService.deleteTeacher(this.userId)
    this.router.navigate(['/admin/manage-teachers/users'])
    
  }
}


