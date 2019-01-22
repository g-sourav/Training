import { Component, OnInit } from '@angular/core';
import { AppService } from '../api/app.service';
import { products } from 'src/shared/Model/products';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { bloomAdd } from '@angular/core/src/render3/di';
import { AppComponent } from '../app.component';

@Component({
  selector: 'allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {
  appservice:AppService;
  product = new products();
  products:products[];
  appComponent:AppComponent;
 
  category: string;
  imgpath:string="assets/photos/";


  constructor(private router:Router,private route:ActivatedRoute,private app: AppService, private app1: AppComponent) { 
 this.appservice=app;
 this.appComponent=app1;
  }

  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category');
    console.log(this.category);
    
    
        this.appservice.getproducts(this.category).subscribe(response=>{
          
          this.products=response;


          for (let p of this.products) {
            p.imgSource=p.imgSource.trim();
         }

        });

        if(localStorage.getItem("logStatus")=="true"){

          this.appComponent.topshow();
        }
        // else{
        //   this.appComponent.topshow();
        // }
        if(localStorage.getItem("logStatus")=="false"){
          this.appComponent.topshow1();
          
        }

  

        


  }
  singleproduct(productId:string){
    console.log(productId);
    this.router.navigate(['1product',productId]);
    localStorage.setItem("productId",productId);
    

  }

}
