import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
 

  userLoginDetail = new BehaviorSubject<string>('')
  user = new BehaviorSubject<any>({})

  changeUserLogin(data: string){
    this.userLoginDetail.next(data)
  }

  setUserDetail(email: string, name: string){
    let userDetail = {email: email, name: name}
    this.user.next(userDetail)
  }

  constructor() { }
}
