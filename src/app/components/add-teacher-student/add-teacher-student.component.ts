import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ViewClassService } from 'src/app/services/view-class.service';

@Component({
  selector: 'app-add-teacher-student',
  templateUrl: './add-teacher-student.component.html',
  styleUrls: ['./add-teacher-student.component.scss']
})
export class AddTeacherStudentComponent {
  constructor(private viewClassService: ViewClassService){}
  
  @Input() classId !: string
  @ViewChild('f') form!: NgForm
  onSubmit(){
    if(this.form.valid){
      this.viewClassService.addStudentClass(this.classId, this.form.value.student)
      
    }
  }
}
