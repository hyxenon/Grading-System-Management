import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { LayoutModule } from './layout/layout.module';
import { RegistrationModule } from './registration/registration.module';
import { NgChartsModule } from 'ng2-charts';
import { HttpClientModule} from '@angular/common/http';
import { NgxWebstorageModule } from 'ngx-webstorage';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    LayoutModule,
    RegistrationModule,
    NgChartsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
