import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { SignupComponent } from './modules/signup/signup.component';
import { BookBorrowedComponent } from './modules/user/book-borrowed/book-borrowed.component';
import { BorrowBookComponent } from './modules/user/borrow-book/borrow-book.component';
import { EditComponent } from './modules/user/edit/edit.component';
import { BookDetailsComponent } from './modules/admin/book-details/book-details.component';
import { AdminLoginComponent } from './modules/admin/admin-login/admin-login.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ShowBooksService } from './modules/book/service/show-books.service';
import { BorrowerLoginService } from './modules/login/service/borrower-login.service';
import { BorrowerSignupService } from './modules/signup/service/borrower-signup.service';
import { AdminHomeComponent } from './modules/admin/admin-home/admin-home.component';
import { GetUserComponent } from './modules/admin/get-user/get-user.component';
import { DeleteBookService } from './modules/admin/service/delete-book.service';
import { DeleteUserAdminService } from './modules/admin/service/delete-user-admin.service';
import { ShowUsersAdminService } from './modules/admin/service/show-users-admin.service';
import { BookComponent } from './modules/book/book.component';
import { HomeComponent } from './modules/user/home/home.component';
import { UserLogoutComponent } from './modules/user/user-logout/user-logout.component';
import { AddBookComponent } from './modules/admin/add-book/add-book.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EditFormModalComponent } from './modules/admin/edit-form-modal/edit-form-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BookComponent,
    HomeComponent,
    SignupComponent,
    BookBorrowedComponent,
    BorrowBookComponent,
    EditComponent,
    BookDetailsComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    BookDetailsComponent,
    GetUserComponent,
    UserLogoutComponent,
    AddBookComponent,
    EditFormModalComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
         path: 'app-login',
         component: LoginComponent
      },
      {
        path: 'app-signup',
        component: SignupComponent
      },
      {
        path: 'app-book',
        component: BookComponent
      },
      {
        path: 'app-admin-login',
        component:  AdminLoginComponent
      },
      {
        path: 'app-home',
        component:  HomeComponent
      },
      {
        path: 'app-edit',
        component:  EditComponent
      },
      {
        path: 'app-borrow-book',
        component: BorrowBookComponent
      },
      {
        path: 'app-book-borrowed',
        component: BookBorrowedComponent
      },
      {
        path: 'app-admin-home',
        component: AdminHomeComponent
      },
      {
        path: 'app-login',
        component: AdminLoginComponent
      },
      {
        path: 'app-getbooks',
        component: BookDetailsComponent
      },
  
      {
        path: 'app-get-user',
        component: GetUserComponent
      },
      {
        path: 'app-root',
        component: AppComponent
      },
      {
        path: 'app-user-logout',
        component: UserLogoutComponent
      },
      {
        path: 'app-add-book',
        component: AddBookComponent
      }
    ])
  ],
  providers: [ShowBooksService, BorrowerLoginService, BorrowerSignupService, DeleteBookService, DeleteUserAdminService, ShowBooksService,ShowUsersAdminService],
  bootstrap: [AppComponent],
  entryComponents: [
    EditFormModalComponent
  ]
})
export class AppModule {

 
 }
