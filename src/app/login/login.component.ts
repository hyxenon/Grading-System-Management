import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { users } from '../data/UsersData';
import { UserLoginService } from '../services/user-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm!: NgForm
  usersData = users

  constructor(private userService: UserLoginService, private router: Router){}

  ngOnInit(): void {
    
  }
  onSubmit(){
    let isUserValid = false
    let loginEmail = this.loginForm.value.email
    let loginPassword = this.loginForm.value.password
    let user = {
      email: '',
      name: '',
      role: ''
    }
    
    this.usersData.forEach((userDetail) => {
      if(userDetail.email === loginEmail && userDetail.password === loginPassword){
        isUserValid = true
        user.email = userDetail.email
        user.name = userDetail.name
        user.role = userDetail.role
      }
    })
    
    if(this.loginForm.valid && isUserValid){
      this.userService.changeUserLogin(user.role)
      this.userService.setUserDetail(user.email, user.name)

      
      
       
      this.router.navigate([user.role, 'dashboard'])
    } else {
      alert('Please double check your email or password!')
    }
  }
}
