import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserLoginService } from 'src/app/services/user-login.service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent {
  user = {
    email: '',
    name: ''
  }
  userSubscription!: Subscription
  constructor(private userService: UserLoginService){}
  ngOnInit(): void {
    initFlowbite()
    // this.userSubscription = this.userService.user.subscribe((user) => {
    //   this.user = {
    //     email: user.email,
    //     name: user.name
    //   }
    // })

    const storedValue = localStorage.getItem('ngx-webstorage|user')
    let parsedValue
    if(storedValue){
      parsedValue = JSON.parse(storedValue)
    }

    this.user = {
      email: parsedValue.email,
      name: parsedValue.name
    }
  }

  ngOnDestroy(): void {
    // this.userSubscription.unsubscribe()
  }

  removeUser(){
    localStorage.removeItem('ngx-webstorage|user')
  }
}
