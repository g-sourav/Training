import { Component, OnInit } from '@angular/core';
import { AppService } from '../api/app.service';
import { products } from 'src/shared/Model/products';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  Status : string;
  logStatus : string;
  productId : string;
  preproduct : string;

  appservice:AppService;
  product = new products();
  productitem:products[];
  topportion:boolean=false;


  category: string;
  imgpath:string="assets/photos/";

  constructor(private router:Router,private route:ActivatedRoute,private app: AppService) {
     
    this.appservice=app;
    
    this.logStatus = localStorage.getItem('logStatus');

   }

  ngOnInit() {
    // this.Status = this.route.snapshot.paramMap.get('logStatus');
     if(this.route.snapshot.paramMap.get('productId')==null){
       this.productId=localStorage.getItem('productId');
       localStorage.removeItem("productId");
    console.log("product  " + this.productId);
     }
     else{
      this.productId = this.route.snapshot.paramMap.get('productId');
    
    }

    this.appservice.getproductitem(this.productId).subscribe(response=>{
          
          this.productitem=response;
         
         console.log(this.productitem.length);

         
          for (let p of this.productitem) {
            p.imgSource=p.imgSource.trim();

            console.log(p.imgSource);
            console.log(p.brand);
         }
        
        

        });
  
       
      

      }

      billing(productId:string){
       
        
        console.log(this.Status);
        if((localStorage.getItem('logStatus'))=="true"){
        console.log(productId);
        this.router.navigate(['productbilling',productId]);
        // localStorage.setItem("top","false");
        
       
          
        
        }
        else{
          alert("Please Login first !!");
        }
    
      }
  
}
