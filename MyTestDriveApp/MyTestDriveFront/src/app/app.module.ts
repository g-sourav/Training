import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {RouterModule} from '@angular/router';
import { BookTestDriveComponent } from './book-test-drive/book-test-drive.component';
import { RegisterService } from './service/register.service';
import { LoginService } from './service/login.service';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { LocationComponent } from './location/location.component';
import { CustomerserviceComponent } from './customerservice/customerservice.component';
import { BookingComponent } from './booking/booking.component';
import { BookingService } from './service/booking.service';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ForgotPasswordService } from './service/forgot-password.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    BookTestDriveComponent,
    LocationComponent,
    CustomerserviceComponent,
    BookingComponent,
    ForgotPasswordComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{
      path:'login',
      component:LoginComponent
    },
    {
      path:'app',
      component:AppComponent
    },
    {
      path:'register',
      component:RegisterComponent
    },
    {
      path:'booktestdrive',
      component:BookTestDriveComponent
    },
    {
      path:'NotificationPage/:name',
      component:LocationComponent
    },
    {
      path:'customer Services',
      component:CustomerserviceComponent
    },
    {
      path:'booking',
      component:BookingComponent
    },
    {
      path:'forgot-password',
      component:ForgotPasswordComponent
    }
    ,
    {
      path:'about',
      component:AboutComponent
    }
  ])
  ],
  providers: [RegisterService,LoginService,BookingService,ForgotPasswordService,AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
