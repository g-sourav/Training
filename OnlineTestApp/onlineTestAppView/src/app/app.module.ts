import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { LoginRegisterService } from './service/login-register.service';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GetDetailsService } from './service/get-details.service';
import { TestPageComponent } from './test-page/test-page.component';
import { QuestionDetailsService } from './service/question-details.service';
import {SlideshowModule} from 'ng-simple-slideshow';

const appRoutes:Routes=[
  {path:"dashboard/:id",component:DashboardComponent},
  {path:"homepage",component:AppComponent},
  {path:"testpage/:testname/:username",component:TestPageComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    LoginRegisterComponent,
    DashboardComponent,
    TestPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    HttpModule,
    SlideshowModule,
  ],
  providers: [LoginRegisterService,GetDetailsService,QuestionDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
