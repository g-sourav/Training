import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScrollingComponent } from './scrolling/scrolling.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AdminDataService } from './admin-data.service';
import { MovieDescriptionComponent } from './movie-description/movie-description.component';
import { AdminComponent } from './admin/admin.component';
import { CriticReviewsComponent } from './critic-reviews/critic-reviews.component';
import { UserReviewsComponent } from './user-reviews/user-reviews.component';
import { SummaryComponent } from './summary/summary.component';
import { ShowPageComponent } from './show-page/show-page.component';
import { BookPageComponent } from './book-page/book-page.component';
import { ConfirmPageComponent } from './confirm-page/confirm-page.component';
import { DatePipe } from '@angular/common';
import { ShowPageService } from './show-page.service';
import { ConfirmPageService } from './confirm-page.service';
import { BookPageService } from './book-page.service';
import { AuthService } from './auth.service';
import { CriticComponent } from './critic/critic.component';
import { CriticServiceService } from './critic-service.service';
import { BookingComponent } from './booking/booking.component';
import { ShowDataComponent } from './show-data/show-data.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ScrollingComponent,
    LoginComponent,
    SignupComponent,
    MovieDescriptionComponent,
    AdminComponent,
    CriticReviewsComponent,
    UserReviewsComponent,
    SummaryComponent,
    ShowPageComponent,
    BookPageComponent,
    ConfirmPageComponent,
    CriticComponent,BookingComponent,
    ShowDataComponent
  ],
  imports: [
    AlertModule.forRoot(),BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule,ReactiveFormsModule
  ],
  providers: [AdminDataService,AppComponent,DatePipe,ShowPageService,ConfirmPageService,
    BookPageService,AuthService,CriticServiceService,DashboardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
