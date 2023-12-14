import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  user!: {
    name: string,
    email: string,
    strand: string,
    position: string,
    _id: string
  } 


  constructor(private router: Router){}

  ngOnInit(): void {
    const storedValue = localStorage.getItem('ngx-webstorage|user')
    let parsedValue
    if(storedValue){
      parsedValue = JSON.parse(storedValue)
    }
    this.user = parsedValue
   
    if(this.user === undefined){
      this.router.navigate(['login'])
    }
    
  }
}
