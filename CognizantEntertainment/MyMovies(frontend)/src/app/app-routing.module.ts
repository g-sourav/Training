import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SummaryComponent } from './summary/summary.component';
import { UserReviewsComponent } from './user-reviews/user-reviews.component';
import { CriticReviewsComponent } from './critic-reviews/critic-reviews.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShowPageComponent } from './show-page/show-page.component';
import { BookPageComponent } from './book-page/book-page.component';
import { AuthGuard } from './auth.guard';
import { ConfirmPageComponent } from './confirm-page/confirm-page.component';
import { MovieDescriptionComponent } from './movie-description/movie-description.component';


const routes: Routes = [ {path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:'movie', component:MovieDescriptionComponent},
{path:'app',component:AppComponent},
{path:'dashboard',component:DashboardComponent},
{path:'shows',component:ShowPageComponent,canActivate:[AuthGuard]},
{path:'bookTickets',component:BookPageComponent,canActivate:[AuthGuard]},
{path:'confirm',component:ConfirmPageComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
