import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { LoginComponent } from './login/login.component';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule }   from '@angular/forms';
import { RouterModule} from '@angular/router';
import {PlacelistComponent} from './placelist/placelist.component';
import { LoginService } from './api/login.service';
  import {CustomerService} from './api/customer.service';
  import {PlacelistService} from './api/placelist.service';
import { NavbarComponent } from './navbar/navbar.component';
import { BuslistComponent } from './buslist/buslist.component';
import { BookingComponent } from './booking/booking.component';
import { SeatsComponent } from './seats/seats.component';
import { ViewbookingComponent } from './viewbooking/viewbooking.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerdetailsComponent,
    LoginComponent,
    PlacelistComponent,
    NavbarComponent,
    BuslistComponent,
    BookingComponent,
    SeatsComponent,
    ViewbookingComponent,
    EditprofileComponent,
    ConfirmationComponent,
    HomepageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    
  ],
  providers: [PlacelistService,LoginService,CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
