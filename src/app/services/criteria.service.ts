import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CriteriaType } from '../model/criteriaType.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CriteriaService {

  criteriaTypes = new Subject<CriteriaType[]>()
  criteriaTypesArr : CriteriaType[] = []
  constructor(private http: HttpClient) { }

  addCriteria(classId: string, criteriaType: string, percentage: number){
    this.http.post<{message: string, criteria: CriteriaType[]}>('http://localhost:3000/api/admin/class/add/criteriaType', {classId: classId, newCriteriaType: criteriaType, newPercentage: percentage})
    .subscribe(response => {
      this.getCriteriaTypes(classId)
    })
  }


  getCriteriaTypes(classId: string){
    this.http.post<{message: string, criteriaTypes : CriteriaType[]}>('http://localhost:3000/api/admin/class/get/criteriaTypes', {classId: classId})
    .subscribe(response => {
      this.criteriaTypes.next(response.criteriaTypes)
    })
  }

  deleteCriteriaType(classId: string, criteriaTypeId: string){
    this.http.post<{message: string, updatedClass : CriteriaType[]}>('http://localhost:3000/api/admin/class/delete/criteriaType', {classId: classId, criteriaTypeId: criteriaTypeId})
    .subscribe(response => {
      this.getCriteriaTypes(classId)
    })
  }

  getScoreStudentCriteria(classId: string, criteriaId: string, studentId: string){
    return this.http.post<{selectedScore: {studentId: string, score: number, _id: string}}>('http://localhost:3000/api/admin/class/get/studentScore', {classId: classId, criteriaId: criteriaId, studentId: studentId})
  }
}
