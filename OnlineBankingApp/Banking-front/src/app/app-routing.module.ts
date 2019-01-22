import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ViewbalanceComponent } from './viewbalance/viewbalance.component';
import { TransferComponent } from './transfer/transfer.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { AddrecepientsComponent } from './addrecepients/addrecepients.component';
import { AdminComponent } from './admin/admin.component';
import { AddaccountComponent } from './addaccount/addaccount.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { ViewtransactionsComponent } from './viewtransactions/viewtransactions.component';
import { PicComponent } from './pic/pic.component';
import { FontComponent } from './font/font.component';
import { PicadminComponent } from './picadmin/picadmin.component';
import { FontadminComponent } from './fontadmin/fontadmin.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
 
 {
  path: 'signup',
  component: SignupComponent
},
{
  path: 'login',
  component: LoginComponent
},


{
  path: 'viewcomponent/:id',
  component: ViewprofileComponent
},
{
  path: 'Mainpage/:id',
  component: MainpageComponent
},
{
  path: 'home',
  component: HomeComponent
},

{
  path: 'viewbalance/:id',
  component: ViewbalanceComponent
},
{
  path: 'transfer/:id',
  component: TransferComponent
},
{
  path: 'transactionlist/:id',
  component: TransactionsComponent
},
{
  path: 'pic/:id',
  component: PicComponent
},

{
  path: 'recepient/:id',
  component: AddrecepientsComponent
},
{
  path: 'font/:id',
  component: FontComponent
},
{
  path: 'picadmin/:id',
  component:PicadminComponent
},
{
  path: 'fontadmin/:id',
  component: FontadminComponent
},

{
  path: 'admin/:id',
  component: AdminComponent
},

{
  path: 'addaccount/:id',
  component:AddaccountComponent 
},

{
  path: 'adminprofile/:id',
  component:AdminprofileComponent 
},
{
  path: 'Viewtransactions/:id',
  component:ViewtransactionsComponent 
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
