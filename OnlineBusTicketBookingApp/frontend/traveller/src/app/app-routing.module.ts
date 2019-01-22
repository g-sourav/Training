import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { LoginComponent } from './login/login.component';
import { PlacelistComponent } from './placelist/placelist.component';
import { BuslistComponent } from './buslist/buslist.component';
import { SeatsComponent } from './seats/seats.component';
import { BookingComponent } from './booking/booking.component';
import { ViewbookingComponent } from './viewbooking/viewbooking.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: 'RegisterForm',
    component:CustomerdetailsComponent
 },
 {
   path: 'loginForm',
   component: LoginComponent
},

{
 path: 'PlaceListPage/:mailId',
 component: PlacelistComponent
},
{
  path: 'BusList/:mailId/:Date/:fare',
  component:  BuslistComponent

},
{
  path: 'Seats/:mailId/:Date/:fare/:BusNumber',
    component: SeatsComponent
},
{
  path:'BookingPage/:mailId/:Date/:fare/:BusNumber/:seats/:seatNumbers',
  component: BookingComponent
},
{
  path: 'ViewBookings',
  component: ViewbookingComponent
},
{
  path: 'EditProfile',
  component: EditprofileComponent
},
{
  path: 'ConfirmPage',
  component: ConfirmationComponent
},
{
  path: 'nav',
  component:  NavbarComponent
},
{
  path:"",
   component: HomepageComponent 
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
