import { Injectable } from '@angular/core';
import { Subject, last, map } from 'rxjs';
import { userCreate } from '../model/userCreate.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsersTeacherService {

  userTeachers = new Subject<userCreate[]>()

  private teachers: userCreate[] = []

  constructor(private http: HttpClient, private router: Router) { }
  


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
  
  

  addTeacher(email: string, firstName: string, lastName: string, password: string, gender: string, position: string, status: string){
    const teacher: userCreate = {_id: 'a', email: email, firstName: firstName, lastName: lastName, password: password, gender: gender, position: position, status: status}
    this.http.post<{message: string, userId: string}>('http://localhost:3000/api/admin/users/create-user', teacher)
      .subscribe((data) => {
        const id = data.userId 
        teacher._id = id
    
        
        
        this.teachers.push(teacher)
        this.userTeachers.next(this.teachers.slice())
        
      })
  }

  updateTeacher(id: string, email:string, password:string, firstName: string, lastName: string, position: string | undefined, status: string | undefined, gender: string | undefined){
    const user = {_id: id, email: email, password: password, firstName: firstName, lastName: lastName, position: position, status: status, gender: gender}
    this.http.put("http://localhost:3000/api/admin/users/" + id, user)
      .subscribe(response => {
        const updatedUsers = [...this.teachers]
        const oldPostIndex = updatedUsers.findIndex(u => u._id === user._id)
        updatedUsers[oldPostIndex] = user
        this.teachers = updatedUsers
        this.userTeachers.next([...this.teachers])
        this.router.navigate(['/admin/manage-teachers'])
      })
  }



  getTeacher(id:string) {
    return this.http.get<{_id: string, email: string, firstName: string, lastName: string, password: string, gender:string, status: string, position: string}>("http://localhost:3000/api/admin/users/" + id)
    }
  
}
