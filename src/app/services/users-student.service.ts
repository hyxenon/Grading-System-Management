import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, map } from 'rxjs';
import { userCreate } from '../model/userCreate.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Student } from '../model/Student.model';

@Injectable({
  providedIn: 'root'
})
export class UsersStudentService {
  userStudents = new Subject<Student[]>()
  isEdit = new BehaviorSubject<boolean>(false)

  private students: Student[] = []

  constructor(private http: HttpClient, private router: Router) { }


  getStudents(){
    this.http.get<{message: string, posts: any}>('http://localhost:3000/api/admin/users/students')
    .pipe(map(userData => {
      return userData.posts.map((post: any) => {
        return {
          _id: post._id,
          email: post.email,
          password: post.password,
          firstName: post.firstName,
          lastName: post.lastName,
          position: post.position,
          status: post.status,
         
        }
      })
    }))
    .subscribe((transformedPosts) => {
      this.students = transformedPosts
      this.userStudents.next([...this.students])
    })
  }

  addStudent(email: string, firstName: string, lastName: string, password: string, gender: string, position: string, status: string, strand: string){
    const student: Student = {_id: 'a', email: email.toLowerCase(), firstName: firstName.toLowerCase(), lastName: lastName.toLowerCase(), password: password, gender: gender.toLowerCase(), position: position.toLowerCase(), status: status, strand: strand.toLowerCase(), classes: []}
    this.http.post<{message: string, studentId: string}>('http://localhost:3000/api/admin/users/create-user/student', student)
      .subscribe((data) => {
        const id = data.studentId 
        student._id = id
        this.students.push(student)
        this.userStudents.next(this.students.slice())
        
      })
  }


  updateStudent(id: string, email:string, password:string, firstName: string, lastName: string, position: string, status: string, gender: string, strand: string, classes: []){
    const user = {_id: id, email: email .toLowerCase(), password: password, firstName: firstName .toLowerCase(), lastName: lastName .toLowerCase(), position: position.toLowerCase(), status: status, gender: gender.toLowerCase(), strand: strand.toLowerCase(), classes}
    this.http.put("http://localhost:3000/api/admin/users/student/" + id, user)
      .subscribe(response => {
        const updatedUsers = [...this.students]
        const oldPostIndex = updatedUsers.findIndex(u => u._id === user._id)
        updatedUsers[oldPostIndex] = user
        this.students = updatedUsers
        this.userStudents.next([...this.students])
      })
  }


  deleteStudent(id: string){
    this.http.delete("http://localhost:3000/api/admin/users/student/" + id)
    .subscribe(()=>{
      const updatedPosts = this.students.filter(student => student._id !== id)
      this.students = updatedPosts
      this.userStudents.next([...this.students])
    })
  }

  getStudent(id:string) {
    return this.http.get<{_id: string, email: string, firstName: string, lastName: string, password: string, gender:string, status: string, position: string, strand: string, classes: []}>("http://localhost:3000/api/admin/users/student/" + id)
    }

 
}
