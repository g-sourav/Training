import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../api/app.service';
import { products } from 'src/shared/Model/products';
import { Router } from '@angular/router';
import { User } from 'src/shared/Model/user';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  productId : string;
  logStatus : string;
  product = new products();
  productbill:products[];
  imgpath:string="assets/photos/";
  userName : string;
  user=new User();
  pagesa : boolean=true;



  appservice:AppService;
  appcomponent:AppComponent;


  constructor(private router:Router,private route:ActivatedRoute,private app: AppService,private app1:AppComponent) { 
    this.appservice=app;
    this.userName = localStorage.getItem("userName");
    localStorage.removeItem("userName");
    this.appcomponent=app1;

  }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('productId');
    // this.logStatus = this.route.snapshot.paramMap.get('logStatus');
    this.appservice.getproductbill(this.productId).subscribe(response=>{
          
      this.productbill=response;


      for (let p of this.productbill) {
        p.imgSource=p.imgSource.trim();
     }

    });
    this.appservice.getsingleuser(this.userName).subscribe(response=>{
      this.user=response;
    }); 
    this.appcomponent.tophide();
  }


  lastpage(){
      this.pagesa = false;
     
  
  }
  continue(){
    
    this.logStatus = localStorage.getItem('logStatus');
    localStorage.setItem("logStatus","true");
    this.router.navigate(['home1']);
    this.appcomponent.userContinue();
  //  this.appcomponent.topshow();
    
  }
exit(){
 
    localStorage.setItem("logStatus","false");
    this.router.navigate(['home2']);
    this.appcomponent.userContinue();
    // localStorage.removeItem("logStatus");
    // this.appcomponent.topshow();
  }

  }
  

