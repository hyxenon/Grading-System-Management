import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.scss']
})
export class TeacherDashboardComponent implements OnInit {

  user!: {
    name: string,
    email: string,
    strand: string
  } 


  
  ngOnInit(): void {
    const storedValue = localStorage.getItem('ngx-webstorage|user')
    let parsedValue
    if(storedValue){
      parsedValue = JSON.parse(storedValue)
    }
    this.user = parsedValue
  }
}
