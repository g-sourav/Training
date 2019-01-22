import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Modules/Login/Home/home.component';
import { LoginComponent } from './Modules/Login/Login/login.component';
import { SignupComponent } from './Modules/Login/Signup/signup.component';
import { EnvironmentComponent } from './Modules/QuizEnvironment/environment/environment.component';
import { AdminComponent } from './Modules/Admin/admin/admin.component';
import { ProfileComponent } from './Modules/User/profile/profile.component';
import { CreateQuizComponent } from './Modules/Quiz/create-quiz/create-quiz.component';
import { FinalfetchComponent } from './Modules/Quiz/finalfetch/finalfetch.component';
import { ChangepasswordComponent } from './Modules/User/changepassword/changepassword.component';
import { DeactivateComponent } from './Modules/User/deactivate/deactivate.component';
import { ReportsComponent } from './Modules/User/reports/reports.component';
import { ReportsPageComponent } from './Modules/User/reports-page/reports-page.component';
import { UserSearchAdminComponent } from './Modules/Admin/user-search-admin/user-search-admin.component';
import { IndexComponent } from './Modules/User/index/index.component';
import { UserdashboadComponent } from './Modules/User/userdashboad/userdashboad.component';
import { AdminDashComponent } from './Modules/Admin/admin-dash/admin-dash.component';
import { InstructionComponent } from './Modules/QuizEnvironment/instruction/instruction.component';
import { CardsComponent } from './Modules/Admin/cards/cards.component';
import { TestComponent } from './Modules/Quiz/test/test.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'user', component: IndexComponent,
    children: [
      { path: '', component: UserdashboadComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'changepassword', component: ChangepasswordComponent },
      { path: 'deactivate', component: DeactivateComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'reports-page', component: ReportsPageComponent },
      { path: 'createquiz', component: CreateQuizComponent },
      { path: 'fetchfinal', component: FinalfetchComponent },
      { path: 'test', component: TestComponent },
      {path:'cards',component:CardsComponent}
    ]
  },
  { path: 'environment', component: EnvironmentComponent },
  {path:'instructions',component:InstructionComponent},
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: '', component: AdminDashComponent },
      { path: 'searchuser', component: UserSearchAdminComponent },
      { path: 'createquiz', component: CreateQuizComponent },
      { path: 'fetchfinal', component: FinalfetchComponent },
      { path: 'test', component: TestComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'reports-page', component: ReportsPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
