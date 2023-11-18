import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Subject } from 'rxjs';
import { SubjectModel } from '../model/SubjectModel.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  subjects = new Subject<SubjectModel[]>()
  isEdit = new BehaviorSubject<boolean>(false)
  subject = new Subject<SubjectModel>();
  private allSubjects: SubjectModel[] = []

  constructor(private http: HttpClient, private router: Router) { }
  getSubjects(){
    this.http.get<{ message: string, subjects: SubjectModel[] }>('http://localhost:3000/api/admin/subjects')
      .subscribe(response => {
        this.allSubjects = response.subjects;
        this.subjects.next([...this.allSubjects]); // Emit a new copy of the array
      });
  }


  addSubject(subjectCode: string, subjectDescription: string, strand: string){
    const newSubject = {subjectCode: subjectCode.toLowerCase(), subjectDescription: subjectDescription.toLowerCase(), strand: strand.toLowerCase()}
    this.http.post<{ message: string, subject: SubjectModel }>('http://localhost:3000/api/admin/subjects/create/subject', newSubject)
    .subscribe(response => {
      this.allSubjects.push(response.subject);
      this.subjects.next([...this.allSubjects]); // Emit a new copy of the array
    });
  }

  updateSubject(id: string, subjectCode: string, subjectDescription: string, strand: string) {
    this.http.put<{ message: string, subject: SubjectModel }>(`http://localhost:3000/api/admin/subjects/update/${id}`, {
      subjectCode: subjectCode.toLowerCase(),
      subjectDescription: subjectDescription.toLowerCase(),
      strand: strand.toLowerCase()
    })
      .subscribe(response => {
        const updatedUsers = [...this.allSubjects]
        const oldPostIndex = updatedUsers.findIndex(u => u._id === response.subject._id)
        updatedUsers[oldPostIndex] = response.subject
        this.allSubjects = updatedUsers
        this.subjects.next([...this.allSubjects]);
       
      });
  }

  getSubject(id: string){
    this.http.get<{ message: string, subject: SubjectModel }>(`http://localhost:3000/api/admin/subjects/${id}`)
      .subscribe(response => {
        this.subject.next(response.subject);
      });
  }


  deleteSubject(id: string) {
    this.http.delete<{ message: string, subject: SubjectModel }>(`http://localhost:3000/api/admin/subjects/delete/${id}`)
    .subscribe(()=>{
      const updatedPosts = this.allSubjects.filter(subject => subject._id !== id)
      this.allSubjects = updatedPosts
      this.subjects.next([...this.allSubjects])
    })
}
 
}
