import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SubjectModel } from 'src/app/model/SubjectModel.model';
import { SubjectsService } from 'src/app/services/subjects.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.scss']
})
export class AddSubjectComponent implements OnInit {
  @Input() role!: string
  @ViewChild('f') form!: NgForm
  subject!: SubjectModel
  currentYear = new Date().getFullYear()
  nextYear = new Date().getFullYear() + 1
  subjectCode = ''
  subjectDescription = ''
  subjectId!: string | any
  strand = ''
  isEdit = false
  isEditSubscription!: Subscription

  constructor(private subjectService: SubjectsService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.isEditSubscription = this.subjectService.isEdit.subscribe((data) => {
      this.isEdit = data
    })

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if(paramMap.has('id')){
        this.subjectId = paramMap.get('id')
        if(this.subjectId === 'users'){
          return
        }
        this.subjectService.getSubject(this.subjectId)
        this.subjectService.subject.subscribe((data) => {
          this.subjectCode = data.subjectCode
          this.subjectDescription = data.subjectDescription
          this.strand = data.strand
        })
      }
    })
  }
  onSubmit(){
    if(this.form.valid){
      if(this.isEdit){
        this.subjectService.updateSubject(this.subjectId,this.form.value.subjectCode, this.form.value.subjectDescription, this.form.value.strand)
        alert('Update Successful!')
      }else{
        this.subjectService.addSubject(this.form.value.subjectCode, this.form.value.subjectDescription, this.form.value.strand)
      }
      
    } else {
      alert('Wrong Input')
    }
  }

  onClose(){
    this.subjectCode = ''
    this.subjectDescription = ''
    this.strand = ''
    this.router.navigate(['/admin/manage-subjects/subjects'])
  }

  onDelete(){
    this.subjectCode = ''
    this.subjectDescription = ''
    this.strand = ''
    this.subjectService.deleteSubject(this.subjectId)
    this.router.navigate(['/admin/manage-subjects/subjects'])
  }


}
