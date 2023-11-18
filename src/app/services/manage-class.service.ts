import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { classModel } from '../model/classModel.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ManageClassService {
  classes = new Subject<classModel[]>()
  isEdit = new BehaviorSubject<boolean>(false)
  class = new Subject<classModel>();

  private allClass: classModel[] = []

  constructor(private http: HttpClient, private router: Router) { }
  

  getClasses(){
    this.http.get<{ message: string, class: classModel[] }>('http://localhost:3000/api/admin/class')
      .subscribe(response => {
        this.allClass = response.class;
        this.classes.next([...this.allClass]); // Emit a new copy of the array
      });
  }

  addClass(subjectCode: string, subjectDescription: string, teacherEmail: string, strand: string){
    const newClass = {subjectCode: subjectCode.toLowerCase(), subjectDescription: subjectDescription.toLowerCase(), teacherEmail: teacherEmail.toLowerCase(), strand: strand.toLowerCase(), students: []}
    this.http.post<{ message: string, class: classModel }>('http://localhost:3000/api/admin/class/create/class', newClass)
    .subscribe(response => {
      this.allClass.push(response.class);
      this.classes.next([...this.allClass]); // Emit a new copy of the array
    });
  }


  updateClass(id: string, subjectCode: string, subjectDescription: string, teacherEmail: string, strand: string, students: []) {
    this.http.put<{ message: string, class: classModel }>(`http://localhost:3000/api/admin/class/update/${id}`, {
      subjectCode: subjectCode.toLowerCase(),
      subjectDescription: subjectDescription.toLowerCase(),
      teacherEmail: teacherEmail.toLowerCase(),
      strand: strand.toLowerCase(),
      students
    })
      .subscribe(response => {
        const updatedUsers = [...this.allClass]
        const oldPostIndex = updatedUsers.findIndex(u => u._id === response.class._id)
        updatedUsers[oldPostIndex] = response.class
        this.allClass = updatedUsers
        this.classes.next([...this.allClass]);
      });
  }

  getClass(id: string){
    this.http.get<{ message: string, class: classModel }>(`http://localhost:3000/api/admin/class/${id}`)
      .subscribe(response => {
        this.class.next(response.class);
      });
  }


  deleteClass(id: string) {
    this.http.delete<{ message: string, subject: classModel }>(`http://localhost:3000/api/admin/class/delete/${id}`)
    .subscribe(()=>{
      const updatedPosts = this.allClass.filter(_class => _class._id !== id)
      this.allClass = updatedPosts
      this.classes.next([...this.allClass])
    })
}

}
