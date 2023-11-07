import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { userCreate } from '../model/userCreate.model';

@Injectable({
  providedIn: 'root'
})
export class UsersStudentService {
  userTeachers = new Subject<userCreate[]>()

  private teachers = [
    {
      email: "hydxenon@gmail.com",
      firstName: "Justine Edward",
      lastName: 'Santos',
      password: '1234',
      gender: 'male',
      position: 'Student',
      status: true
    }
  ]

  getStudents(){
    return this.teachers.slice()
  }

  addStudent(email: string, firstName: string, lastName: string, password: string, gender: string, position: string, status: boolean){
    this.teachers.push({
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
      gender: gender,
      position: position,
      status: status
    })
    
    
    
  }
  constructor() { }
}
