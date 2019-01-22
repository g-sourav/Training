import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule}   from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { HttpModule } from '@angular/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SignupService } from './api/signup.service';
import { AddrecepientsComponent } from './addrecepients/addrecepients.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ViewbalanceComponent } from './viewbalance/viewbalance.component';
import { TransferComponent } from './transfer/transfer.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AdminComponent } from './admin/admin.component';
import { AddaccountComponent } from './addaccount/addaccount.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { ViewtransactionsComponent } from './viewtransactions/viewtransactions.component';
import { PicComponent } from './pic/pic.component';
import { FontComponent } from './font/font.component';
import { PicadminComponent } from './picadmin/picadmin.component';
import { FontadminComponent } from './fontadmin/fontadmin.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    HomeComponent,
    SignupComponent,
    AddrecepientsComponent,
    ViewprofileComponent,
    LoginComponent,
    MainpageComponent,
    ViewbalanceComponent,
    TransferComponent,
    TransactionsComponent,
    AdminComponent,
    AddaccountComponent,
    AdminprofileComponent,
    ViewtransactionsComponent,
    PicComponent,
    FontComponent,
    PicadminComponent,
    FontadminComponent,
    FooterComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
