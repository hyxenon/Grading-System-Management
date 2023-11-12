import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.scss']
})
export class AddClassComponent {
  @Input() role!: string
  @ViewChild('f') loginForm!: NgForm
  currentYear = new Date().getFullYear()
  nextYear = new Date().getFullYear() + 1
  subjectCode = ''
  subjectDescription = ''
  onSubmit(){

  }
}
