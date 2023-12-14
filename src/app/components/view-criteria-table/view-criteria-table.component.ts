import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from 'src/app/model/Student.model';
import { criteria } from 'src/app/model/criteria.model';
import { CriteriaScore } from 'src/app/model/criteriaScore.model';
import { ViewClassService } from 'src/app/services/view-class.service';

@Component({
  selector: 'app-view-criteria-table',
  templateUrl: './view-criteria-table.component.html',
  styleUrls: ['./view-criteria-table.component.scss']
})



export class ViewCriteriaTableComponent {
  
  @Input() students !: Student[]
  @Input() criteriaId !: string
  @Input() criteriaScores !: { studentId: string; score: number; _id: string }[];
  @Input() criteria!: criteria
  @ViewChild('f') form !: NgForm
  studentId !:string

  constructor(private viewClassService: ViewClassService){}

  getScoreForStudent(scores: { studentId: string, score: number }[], studentId: string): string {
    const matchingScore = scores.find(score => score.studentId === studentId);
  
    return matchingScore ? matchingScore.score.toString() : 'N/A'; 
  }

  onSubmit(){
    if(this.form.valid){
      this.viewClassService.editStudentScore(this.criteriaId, this.studentId, this.form.value.studentGrade)
      this.form.reset()
      window.location.reload()
      
    } else {
      alert("Please input a grade")
    }

    
  }

  editStudentId(studentId: string){
    this.studentId = studentId
  }
}
