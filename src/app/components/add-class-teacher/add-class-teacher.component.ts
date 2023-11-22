import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { subject } from 'src/app/model/subject.model';
import { ManageClassService } from 'src/app/services/manage-class.service';


@Component({
  selector: 'app-add-class-teacher',
  templateUrl: './add-class-teacher.component.html',
  styleUrls: ['./add-class-teacher.component.scss']
})


export class AddClassTeacherComponent {
  @ViewChild('f') form!: NgForm
  @Input() availableSubjects !: subject[]
  @Input() user!: {
    name: string,
    email: string,
    strand: string,
    _id: string
  }

  isSubjectValid:boolean = false
  subjectCode!: string
  subjectDescription!: string

  constructor(private classService: ManageClassService){}
  onSubmit(){
    this.availableSubjects.filter(subject => {
      if(subject.subjectCode === this.form.value.subjectCode){
        this.classService.addClass(subject.subjectCode, subject.subjectDescription, this.user._id, this.user.strand, subject.year)
        this.isSubjectValid = true
        return
        
      }
    })

    if(this.isSubjectValid){
      alert("Class Successfully Created!")
      this.form.reset()
    } else {
      alert("Subject Code Not Found! Please Double check your Input.")
    }
  
  }
}
