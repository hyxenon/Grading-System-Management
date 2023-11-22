import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { classModel } from 'src/app/model/classModel.model';
import { ManageClassService } from 'src/app/services/manage-class.service';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.scss']
})
export class AddClassComponent implements OnInit {
  @Input() role!: string
  @Input() position!: string
  @ViewChild('f') form!: NgForm
  classId!: string | any
  isEdit = false
  isEditSubscription!: Subscription
  class!: classModel | undefined

  constructor(private classService: ManageClassService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.isEditSubscription = this.classService.isEdit.subscribe((data) => {
      this.isEdit = data
    })

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if(paramMap.has('id')){
        this.classId = paramMap.get('id')
        if(this.classId === 'class'){
          return
        }
        this.classService.getClass(this.classId)
        this.classService.class.subscribe((data) => {
          this.class = {_id: data._id, subjectCode: data.subjectCode, subjectDescription: data.subjectDescription, teacherId: data.teacherId, strand: data.strand, students: data.students, year: data.year}
        })
      }
    })
  }
 
  onSubmit(){
    if(this.form.valid){
      
    } else {
      alert("Please Input the fields")
    }


    if(this.form.valid){
      if(this.isEdit){
        if(this.class){
          this.classService.updateClass(this.classId, this.form.value.subjectCode, this.form.value.subjectDescription, this.form.value.teacher, this.form.value.strand, this.class?.students)
        }
        alert('Update Successful!')
      }else{
      }
      
    } else {
      alert('Wrong Input')
    }
  }

  onClose(){
    this.class = undefined
    if(this.position === 'teacher'){
      this.router.navigate(['/teacher/class'])
    } else {
      this.router.navigate(['/admin/manage-class/class'])
    }
  }

  onDelete(){
    this.class = undefined
    this.classService.deleteClass(this.classId)
    if(this.position === 'teacher'){
      this.router.navigate(['/teacher/class'])
    } else {
      this.router.navigate(['/admin/manage-class/class'])
    }
  }
}
