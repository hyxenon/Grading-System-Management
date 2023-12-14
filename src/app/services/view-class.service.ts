import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { classModel } from '../model/classModel.model';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import { Student } from '../model/Student.model';
import { criteria } from '../model/criteria.model';

@Injectable({
  providedIn: 'root'
})
export class ViewClassService {
  _class  = new Subject<classModel>()
  students = new Subject<Student[]>()
  criteriaClass = new Subject<criteria[]>()
  classId = new BehaviorSubject<string>('')
  criteriaId = new BehaviorSubject<string>('')
  
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
      this.getStudentClass(classId)
      console.log(response.message);
    })
  }

  deleteStudentClass(classId: string, id: string){
    this.http.post<{message: string}>('http://localhost:3000/api/admin/class/delete/student', {classId: classId, studentId: id})
    .subscribe(response => {
      this.getStudentClass(classId)
      console.log(response.message);
    })
  }

  addCriteriaClass(classId: string, criteriaName: string, criteriaDescription: string, type: string, deadline: string, isPublish: boolean){
    this.http.post<{message: string}>('http://localhost:3000/api/admin/class/add/criteria', {classId: classId, criteriaName: criteriaName, criteriaDescription: criteriaDescription, type: type, deadline: deadline, isPublish: isPublish})
    .subscribe(response => {
      this.getCriteriaClass(classId)
      console.log(response.message);
    })
  }


  deleteCriteriaClass(classId: string, criteriaId: string){
    this.http.post<{message: string}>('http://localhost:3000/api/admin/class/delete/criteria', {classId: classId, criteriaId: criteriaId})
    .subscribe(response => {
      this.getCriteriaClass(classId)
      console.log(response.message);
    })
  }

  getCriteriaClass(classId: string){
    this.http.post<{criteria: criteria[]}>('http://localhost:3000/api/admin/class/get/criteria', {classId: classId})
    .subscribe(response => {
      this.criteriaClass.next(response.criteria)
    })
  }

  getOneCriteria(criteriaId: string){
    return this.http.post<{selectedCriteria: criteria}>('http://localhost:3000/api/admin/class/getOne/criteria', {classId: this.classId.value, criteriaId: criteriaId})

  }

  onEditPublish(classId: string, criteriaId: string, publish: boolean){
    this.http.post<{message: String, updatedClass: classModel}>('http://localhost:3000/api/admin/class/edit/publish', {classId: classId, criteriaId: criteriaId, isPublish: publish})
    .subscribe(response => {
      this.getCriteriaClass(classId)
    })
  }


  editStudentScore(criteriaId: string, studentId: string, newGrade: string){
    this.http.post<{message: String}>('http://localhost:3000/api/admin/class/edit/scores', {classId: this.classId.value, criteriaId: criteriaId, studentId: studentId, newGrade: newGrade})
    .subscribe(response => {
      console.log(response.message);
    })
  }

}
