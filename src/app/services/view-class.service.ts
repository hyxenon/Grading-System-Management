import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { classModel } from '../model/classModel.model';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import { Student } from '../model/Student.model';

@Injectable({
  providedIn: 'root'
})
export class ViewClassService {
  _class  = new Subject<classModel>()
  students = new Subject<Student[]>()
  classId = new BehaviorSubject<string>('')
  constructor(private http: HttpClient) { }

  getClass(id: string){
    this.http.post<{message: string, class: classModel}>('http://localhost:3000/api/admin/class/get/class', {classId: id})
    .subscribe(response => {
      this._class.next(response.class)
      this.classId.next(response.class._id)
    })
  }

  getStudentClass(classId: string){
    this.http.post<{message: string, students: Student[]}>('http://localhost:3000/api/admin/class/get/students', {classId: classId})
    .subscribe(response => {
      this.students.next(response.students)
    })
  }

  addStudentClass(classId: string, id: string){
    this.http.post<{message: string}>('http://localhost:3000/api/admin/class/add/student', {classId: classId, studentId: id})
    .subscribe(response => {
      console.log(response.message);
      
    })
  }
}
