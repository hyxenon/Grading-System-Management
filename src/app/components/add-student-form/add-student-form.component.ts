import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Student } from 'src/app/model/Student.model';
import { AdminDataService } from 'src/app/services/admin-data.service';
import { UsersStudentService } from 'src/app/services/users-student.service';

@Component({
  selector: 'app-add-student-form',
  templateUrl: './add-student-form.component.html',
  styleUrls: ['./add-student-form.component.scss']
})
export class AddStudentFormComponent {
  @Input() role!: string
  @ViewChild('f') form!: NgForm

  userId: string | any
  user!: Student | undefined
  isEdit = false

  constructor(private userStudentService: UsersStudentService, private adminDataService: AdminDataService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.userStudentService.isEdit.subscribe((data) => {
      this.isEdit = data
    })

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if(paramMap.has('id')){
        this.userId = paramMap.get('id')
        if(this.userId === 'users'){
          return
        }
        this.userStudentService.getStudent(this.userId)
          .subscribe(userData => {
            this.user = {_id: userData._id, email: userData.email, firstName: userData.firstName, lastName: userData.lastName, password: userData.password, gender: userData.gender, status: userData.status, position: userData.position, strand: userData.strand, classes: userData.classes}
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
      let userStrand = this.form.value.strand
      let userStatus = this.form.value.status
      
      if(this.isEdit){
        if(this.user?.position){ 
          this.userStudentService.updateStudent(this.userId, userEmail, userPassword, userFirstName, userLastName, this.user?.position, userStatus , userGender, userStrand, this?.user.classes)
          alert("Update Successful!")
        }
      } else {
        this.userStudentService.addStudent(userEmail, userFirstName, userLastName, userPassword, userGender, 'Student', "Online", userStrand)
      }
      this.form.reset()
      this.adminDataService.getAdminData()
      
    } else{
      alert('Wrong input')
    }
  } 

  onClose(){
    this.user = undefined
    this.router.navigate(['/admin/manage-students/users'])
  }

  onDelete(){
    this.userStudentService.deleteStudent(this.userId)
    this.router.navigate(['/admin/manage-students/users'])
    this.adminDataService.getAdminData()
    
  }
}
