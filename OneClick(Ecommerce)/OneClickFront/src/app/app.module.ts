import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppService }    from './api/app.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import{RouterModule, ActivatedRoute} from '@angular/router';
import{ Routes} from '@angular/router';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from "@angular/common/http";
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { ProductComponent } from './product/product.component';
import { BillingComponent } from './billing/billing.component';
import { CartComponent } from './cart/cart.component';
import { NavComponent } from './nav/nav.component';
import { MyAccountComponent } from './my-account/my-account.component';


const appRoutes:Routes=[
  {path:"lproducts/:category",component:AllproductsComponent},
  {path:"1product/:productId",component:ProductComponent},
  {path:"productbilling/:productId",component:BillingComponent},
  //{path:"statusbilling/:logStatus",component:BillingComponent},
  {path:"productpage/:logStatus",component:ProductComponent},
  {path:"home1",component:AppComponent},
  {path:"home2",component:AppComponent},
  {path:"tocart",component:CartComponent},
  {path:"Aboutpage",component:NavComponent},
  {path:"settings",component:MyAccountComponent}

  
 
 
  
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllproductsComponent,
    ProductComponent,
    BillingComponent,
    CartComponent,
    NavComponent,
    MyAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(appRoutes)
  
  ],
  providers: [AppService,AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
