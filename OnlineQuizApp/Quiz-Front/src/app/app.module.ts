import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Modules/Login/Login/login.component';
import { HomeComponent } from './Modules/Login/Home/home.component';
import { SignupComponent } from './Modules/Login/Signup/signup.component';
import { SecurityService } from './Modules/Login/LoginServices/security.service';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './Modules/Login/LoginServices/data-service.service';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChangepasswordComponent } from './Modules/User/changepassword/changepassword.component';
import { AppfooterComponent } from './Modules/User/components/appfooter/appfooter.component';
import { AppheaderComponent } from './Modules/User/components/appheader/appheader.component';
import { AppmenuComponent } from './Modules/User/components/appmenu/appmenu.component';
import { DeactivateComponent } from './Modules/User/deactivate/deactivate.component';
import { ProfileComponent } from './Modules/User/profile/profile.component';
import { QuizCardsComponent } from './Modules/User/quiz-cards/quiz-cards.component';
import { ReportsComponent } from './Modules/User/reports/reports.component';
import { ReportsPageComponent } from './Modules/User/reports-page/reports-page.component';
import { ChangeUserPasswordService } from './Modules/User/UserServices/change-user-password.service';
import { DeactivateUserAccountService } from './Modules/User/UserServices/deactivate-user-account.service';
import { GetAllQuizService } from './Modules/User/UserServices/get-all-quiz.service';
import { GetQuizService } from './Modules/User/UserServices/get-quiz.service';
import { GlobalQuizDetailsService } from './Modules/User/UserServices/global-quiz-details.service';
import { GlobalUserDetailsService } from './Modules/User/UserServices/global-user-details.service';
import { QuizResultService } from './Modules/User/UserServices/quiz-result.service';
import { UpdateUserService } from './Modules/User/UserServices/update-user.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { DropPipe } from './Modules/User/quiz-cards/drop.pipe';
import { FilterPipe } from './Modules/User/quiz-cards/filter.pipe';
import { EnvironmentComponent } from './Modules/QuizEnvironment/environment/environment.component';
import { InstructionComponent } from './Modules/QuizEnvironment/instruction/instruction.component';
import { AdminComponent } from './Modules/Admin/admin/admin.component';
import { QuestionsModuleComponent } from './Modules/Quiz/questions-module/questions-module.component';
import { CreateQuizComponent } from './Modules/Quiz/create-quiz/create-quiz.component';
import { FinalfetchComponent } from './Modules/Quiz/finalfetch/finalfetch.component';
import { TestComponent } from './Modules/Quiz/test/test.component';
import { CreateQuizService } from './Modules/Quiz/QuizServices/create-quiz.service';
import { AddingquestionsService } from './Modules/Quiz/QuizServices/addingquestions.service';
import { CardsComponent } from './Modules/Admin/cards/cards.component';
import { CreateQuizButtonComponent } from './Modules/Admin/create-quiz-button/create-quiz-button.component';
import { AdminHeaderComponent } from './Modules/Admin/components/admin-header/admin-header.component';
import { AdminMenuComponent } from './Modules/Admin/components/admin-menu/admin-menu.component';
import { UserSearchAdminComponent } from './Modules/Admin/user-search-admin/user-search-admin.component';
import { IndexComponent } from './Modules/User/index/index.component';
import { UserdashboadComponent } from './Modules/User/userdashboad/userdashboad.component';
import { AdminDashComponent } from './Modules/Admin/admin-dash/admin-dash.component';
import { EnvironmentService } from './Modules/QuizEnvironment/QuizEnvServices/environment.service';
import { CardsUniquePipe } from './Modules/User/quiz-cards/unique.pipe';
import { AdminDropPipe } from './Modules/Admin/cards/drop.pipe';
import { AdminFilterPipe } from './Modules/Admin/cards/filter.pipe';
import { AdminUniquePipe } from './Modules/Admin/cards/unique.pipe';
import { ReportsFilterPipe } from './Modules/User/reports/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    ChangepasswordComponent,
    AppfooterComponent,
    AppheaderComponent,
    AppmenuComponent,
    UserdashboadComponent,
    DeactivateComponent,
    ProfileComponent,
    QuizCardsComponent,
    ReportsComponent,
    ReportsPageComponent,
    DropPipe,
    FilterPipe,
    EnvironmentComponent,
    InstructionComponent,
    AdminComponent,
    TestComponent,
    FinalfetchComponent,
    CreateQuizComponent,
    QuestionsModuleComponent,
    CardsComponent,
    CreateQuizButtonComponent,
    AdminHeaderComponent,
    AdminMenuComponent,
    UserSearchAdminComponent,
    IndexComponent,
    AdminDashComponent,
    AdminDropPipe,
    AdminFilterPipe,
    AdminUniquePipe,
    CardsUniquePipe,
    ReportsFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule

  ],
  providers: [
    SecurityService,
    HttpClientModule,
    DataService,
    ChangeUserPasswordService,
    DeactivateUserAccountService,
    GetAllQuizService, GetQuizService,
    GlobalQuizDetailsService,
    GlobalUserDetailsService,
    QuizResultService,
    UpdateUserService,
    CreateQuizService,
    AddingquestionsService,
    EnvironmentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
