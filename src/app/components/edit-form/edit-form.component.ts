import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { EditForm } from 'src/app/model/editForm.model';

import { UsersTeacherService } from 'src/app/services/users-teacher.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {

  userId: string | any
  user!: EditForm | undefined
  constructor(private userTeacherService: UsersTeacherService, private route: ActivatedRoute){}
  onEdit(form: NgForm){
    if(form.valid){}
  }

  ngOnInit(): void {
    // this.route.paramMap.subscribe((paramMap: ParamMap) => {
    //   if(paramMap.has('id')){
    //     this.userId = paramMap.get('id')
    //     this.userTeacherService.getPost(this.userId)
    //       .subscribe(userData => {
    //         this.user = {_id: userData._id, email: userData.email, firstName: userData.firstName, lastName: userData.firstName, password: userData.password}
    //       })
    //   }
    // })
  }
}
