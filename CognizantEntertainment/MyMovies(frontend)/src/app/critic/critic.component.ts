import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Critic } from '../critic';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-critic',
  templateUrl: './critic.component.html',
  styleUrls: ['./critic.component.css']
})
export class CriticComponent implements OnInit {

  public user: Critic;
  critic=new Critic();
  form: FormGroup;
  constructor(private fb: FormBuilder,private http:HttpClient,private router:Router) {  this.createForm();}
  createForm() {
    this.form = this.fb.group({
      title: ['', Validators.required],
     critic:['',Validators.required],
      review:['',Validators.required]
    });
  }

  ngOnInit() {
    
  }
  onSubmit(){
    const formModel = this.form.value;
    //this.loading = true;
   
      this.http.post('MyMovies/critic/criticupload', formModel).subscribe();
    setTimeout(() => {
      console.log(formModel);
      console.log("on submit"); 
    this.router.navigate(['critics-path']);
      alert('done!');
      //this.loading = false;
    }, 1000); 
    
  }
  form1=new FormGroup({
    title:new FormControl("",[Validators.required,]),
   /*  Validators.minLength(3),
    UsernameValidators.cannotContainSpace, */
    // UsernameValidators.shouldBeUnique,
  critic:new FormControl("",[Validators.required,]),
  review:new FormControl("",[Validators.required,]),
  });

  get Title(){
    return this.form.get('title');
  }

  get Critic(){
    return this.form.get('critic');
  }
  get Review(){
    return this.form.get('review');
  }

}
