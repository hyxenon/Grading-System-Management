import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

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
  @Input() position!: string

  constructor(private router: Router){}

  onNavigate(){
    if(this.position === 'teacher'){
      this.router.navigate(['/admin/manage-teachers/users'])
    } else {
      this.router.navigate(['/admin/manage-students/users'])
    }
    
  }
}
