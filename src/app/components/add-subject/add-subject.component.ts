import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.scss']
})
export class AddSubjectComponent {
  @Input() role!: string
  @ViewChild('f') loginForm!: NgForm
  currentYear = new Date().getFullYear()
  nextYear = new Date().getFullYear() + 1
  subjectCode = ''
  subjectDescription = ''
  strand = ''

  onSubmit(){

  }
}
