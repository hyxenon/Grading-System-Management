import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subject-card',
  templateUrl: './subject-card.component.html',
  styleUrls: ['./subject-card.component.scss']
})
export class SubjectCardComponent {
  @Input() subjectCode !: string
  @Input() subjectDescription !: string
}
