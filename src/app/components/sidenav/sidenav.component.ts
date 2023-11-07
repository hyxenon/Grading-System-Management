import { Component, OnInit } from '@angular/core';
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
  constructor(private userLoginService: UserLoginService){}
  isCollapse: boolean = false

  onCollapse(){
    this.isCollapse = !this.isCollapse
  }
  ngOnInit(): void {
    
   this.userSubscribe =  this.userLoginService.userLoginDetail.subscribe((data) => {
      this.userLogin = data
    })
  }


  ngOnDestroy(): void {
    this.userSubscribe.unsubscribe()
  }

  
}
