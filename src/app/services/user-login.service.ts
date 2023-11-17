import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
 

  userLoginDetail = new BehaviorSubject<string>('')
  user = new BehaviorSubject<any>({})


  constructor(private http: HttpClient, private localStorage: LocalStorageService, private router: Router) { }

  changeUserLogin(data: string){
    this.userLoginDetail.next(data)
  }

  setUserDetail(email: string, name: string){
    let userDetail = {email: email, name: name}
    this.user.next(userDetail)
  }

  checkUser(email: string, password: string){
    this.http.post<{userType: string, user: any}>('http://localhost:3000/api/login', {email, password})
      .subscribe(data => {
        this.changeUserLogin(data.userType)
        let firstName = data.user.firstName.charAt(0).toUpperCase() + data.user.firstName.slice(1)
        let lastName = data.user.lastName.charAt(0).toUpperCase() + data.user.lastName.slice(1)
        const name = `${firstName} ${lastName}`
        this.setUserDetail(data.user.email, name)
        this.localStorage.store('user', {userLoginDetail: data.userType, name: name, email: data.user.email});
        this.router.navigate([data.userType, 'dashboard'])
      }, error => {
        if(error.status === 404){
          alert('User not found. Please double-check your email or password!')
        } else {
          console.error('An error occurred:', error);
        }
      })
  }
}
