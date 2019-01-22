import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetshomepageComponent } from './petshomepage/petshomepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RouterModule} from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LogoutComponent } from './logout/logout.component';
import { ContactusComponent } from './contactus/contactus.component';

import { from } from 'rxjs';
import { petService } from './api/pet.service';
import { DoglistComponent } from './doglist/doglist.component';
import { CatlistComponent } from './catlist/catlist.component';
import { FishlistComponent } from './fishlist/fishlist.component';
import { HorselistComponent } from './horselist/horselist.component';
import { BirdlistComponent } from './birdlist/birdlist.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PetregComponent } from './petreg/petreg.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerService } from './api/customer.service';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { ExampleComponent } from './example/example.component';


@NgModule({
  declarations: [
    AppComponent,
    PetshomepageComponent,
    AboutusComponent,
    AdminComponent,
    LogoutComponent,
    ContactusComponent,
    DoglistComponent,
    CatlistComponent,
    FishlistComponent, PetregComponent,
    HorselistComponent, BirdlistComponent,
    CustomerComponent,
    CustomerlistComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule, ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,

    RouterModule.forRoot([
      {
        path: 'petshome',
        component: PetshomepageComponent
      },
      {
        path: 'pets',
        component: PetshomepageComponent
      },
      {
        path: 'contactus',
        component: ContactusComponent
      },
      {
        path: 'logout',
        component: LogoutComponent
      },

      {
        path: 'aboutus',
        component: AboutusComponent
     },
     {
       path: 'adminlogin',
       component: AdminComponent
     },
     {
      path: 'dogs',
      component: DoglistComponent
    },
    {
      path: 'cats',
      component: CatlistComponent
    },
    {
      path: 'fishes',
      component: FishlistComponent
    },
    {
      path: 'horses',
      component: HorselistComponent
    },
    {
      path: 'birds',
      component: BirdlistComponent
    },
    {
      path: 'customerregister/:petId',
      component: CustomerComponent
    },
    {
      path: 'petregister',
      component: PetregComponent
    },
    {

      path: 'customerlist',
      component: CustomerlistComponent
    },
  ]),
],
  providers: [petService, HttpClient, CustomerService],
  bootstrap: [PetshomepageComponent]
})
export class AppModule { }
