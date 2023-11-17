import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { Subscription } from 'rxjs';
import { UserLoginService } from 'src/app/services/user-login.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})


export class SidenavComponent implements OnInit {
  userLogin !: string
  userSubscribe!: Subscription
  constructor(private userLoginService: UserLoginService, private router: Router){}
  isCollapse: boolean = false

  onCollapse(){
    this.isCollapse = !this.isCollapse
  }
  ngOnInit(): void {
    
  //  this.userSubscribe =  this.userLoginService.userLoginDetail.subscribe((data) => {
  //     this.userLogin = data
  //   })

    const storedValue = localStorage.getItem('ngx-webstorage|user')
    let parsedValue
    if(storedValue){
      parsedValue = JSON.parse(storedValue)
    }
    this.userLogin = parsedValue.userLoginDetail
  }


  ngOnDestroy(): void {
    
  }

  onNavigate(){
    this.router.navigate([this.userLogin, 'dashboard'])
  }

  removeUser(){
    localStorage.removeItem('ngx-webstorage|user')
  }
  
}
