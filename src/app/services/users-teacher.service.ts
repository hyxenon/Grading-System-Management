import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { userTeacher } from '../model/userTeacher.model';


@Injectable({
  providedIn: 'root'
})
export class UsersTeacherService {

  userTeachers = new Subject<userTeacher[]>()

  private teachers = [
    {
      email: "hydxenon@gmail.com",
      firstName: "Justine Edward",
      lastName: 'Santos',
      password: '1234',
      gender: 'male',
      position: 'Teacher',
      status: true
    }
  ]

  getTeachers(){
    return this.teachers.slice()
  }

  addTeacher(email: string, firstName: string, lastName: string, password: string, gender: string, position: string, status: boolean){
    this.teachers.push({
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
      gender: gender,
      position: position,
      status: status
    })
    console.log(this.teachers);
    
    this.userTeachers.next(this.teachers.slice())
  }
  constructor() { }
}
