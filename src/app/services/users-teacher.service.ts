import { Injectable } from '@angular/core';
import { Subject, last, map } from 'rxjs';
import { userCreate } from '../model/userCreate.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersTeacherService {

  userTeachers = new Subject<userCreate[]>()

  private teachers: userCreate[] = []

  constructor(private http: HttpClient) { }
  


  getTeachers(){
    this.http.get<{message: string, posts: any}>('http://localhost:3000/api/admin/users')
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
      this.teachers = transformedPosts
      this.userTeachers.next([...this.teachers])
    })
  }
  
  

  addTeacher(email: string, firstName: string, lastName: string, password: string, gender: string, position: string, status: boolean){
    const teacher: userCreate = {_id: 'a', email: email, firstName: firstName, lastName: lastName, password: password, gender: gender, position: position, status: status}
    this.http.post<{message: string, userId: string}>('http://localhost:3000/api/admin/users/create-user', teacher)
      .subscribe((data) => {
        const id = data.userId
        teacher._id = id
        this.teachers.push(teacher)
        this.userTeachers.next(this.teachers.slice())
        
      })
  }
  
}
