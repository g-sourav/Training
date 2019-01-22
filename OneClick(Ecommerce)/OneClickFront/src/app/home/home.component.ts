import { Component, OnInit } from '@angular/core';
import { AllproductsComponent } from 'src/app/allproducts/allproducts.component';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  show:boolean=true;
  AllProduct:AllproductsComponent;
  statusCreation : string;

  

  constructor( private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
  }
 
  hide(){
    this.show=false;
  }

  hide2( category : string){
    console.log(category);
  this.router.navigate(['lproducts',category]);
  this.show=false;
  }

   myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

}


