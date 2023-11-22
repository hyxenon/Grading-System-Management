import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-class',
  templateUrl: './card-class.component.html',
  styleUrls: ['./card-class.component.scss']
})
export class CardClassComponent {
  @Input() subjectCode !: string
  @Input() subjectDescription !: string
  @Input() year!:string
}
