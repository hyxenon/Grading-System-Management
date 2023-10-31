import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  @Input() cardName!: string
  @Input() cardYear!: string
  @Input() cardCount!: number
  @Input() cardImg!: string
}
