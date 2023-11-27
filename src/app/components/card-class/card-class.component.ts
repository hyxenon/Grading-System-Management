import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-class',
  templateUrl: './card-class.component.html',
  styleUrls: ['./card-class.component.scss']
})
export class CardClassComponent {
  @Input() subjectCode !: string
  @Input() subjectDescription !: string
  @Input() year!:string

  constructor(private router: Router){}
  onNavigate(){
    this.router.navigate(['/teacher/view-class'])
  }
}
