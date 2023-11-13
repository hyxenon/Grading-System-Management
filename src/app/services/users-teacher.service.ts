import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, last, map } from 'rxjs';
import { userCreate } from '../model/userCreate.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Teacher } from '../model/Teacher.model';


@Injectable({
  providedIn: 'root'
})
export class UsersTeacherService {

  userTeachers = new Subject<userCreate[]>()
  isEdit = new BehaviorSubject<boolean>(false)
  private teachers: Teacher[] = []

  constructor(private http: HttpClient, private router: Router) { }
  


  getTeachers(){
    this.http.get<{message: string, posts: any}>('http://localhost:3000/api/admin/users/teachers')
    .pipe(map(userData => {
      return userData.posts.map((post: any) => {
        return {
          _id: post._id,
          email: post.email,
          password: post.password,
          firstName: post.firstName,
          lastName: post.lastName,
          position: post.position,
          gender: post.gender,
          status: post.status,
         
        }
      })
    }))
    .subscribe((transformedPosts) => {
      this.teachers = transformedPosts
      this.userTeachers.next([...this.teachers])
    })
  }
  
  

  addTeacher(email: string, firstName: string, lastName: string, password: string, gender: string, position: string, status: string, department: string){
    const teacher: Teacher = {_id: 'a', email: email, firstName: firstName, lastName: lastName, password: password, gender: gender, position: position, status: status, department: department, classes: []}
    this.http.post<{message: string, teacherId: string}>('http://localhost:3000/api/admin/users/create-user/teacher', teacher)
      .subscribe((data) => {
        const id = data.teacherId 
        teacher._id = id
        this.teachers.push(teacher)
        this.userTeachers.next(this.teachers.slice())
        
      })
  }

  updateTeacher(id: string, email:string, password:string, firstName: string, lastName: string, position: string | undefined, status: string | undefined, gender: string | undefined, department: string, classes: []){
    const user = {_id: id, email: email, password: password, firstName: firstName, lastName: lastName, position: position, status: status, gender: gender, department, classes: classes}
    this.http.put("http://localhost:3000/api/admin/users/teacher/" + id, user)
      .subscribe(response => {
        const updatedUsers = [...this.teachers]
        const oldPostIndex = updatedUsers.findIndex(u => u._id === user._id)
        updatedUsers[oldPostIndex] = user
        this.teachers = updatedUsers
        this.userTeachers.next([...this.teachers])
       
      })
  }

  deleteTeacher(id: string){
    this.http.delete("http://localhost:3000/api/admin/users/teacher/" + id)
    .subscribe(()=>{
      const updatedPosts = this.teachers.filter(teacher => teacher._id !== id)
      this.teachers = updatedPosts
      this.userTeachers.next([...this.teachers])
    })
  }



  getTeacher(id:string) {
    return this.http.get<{_id: string, email: string, firstName: string, lastName: string, password: string, gender:string, status: string, position: string, department: string, classes: []}>("http://localhost:3000/api/admin/users/teacher/" + id)
    }

  
  
}
