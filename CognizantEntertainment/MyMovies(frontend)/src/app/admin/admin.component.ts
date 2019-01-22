import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public user: User;
  use=new User();
  form: FormGroup;
file: File;
pages:string[]=['10:30','2:15','6;15','9:15'];
 
  constructor(private fb: FormBuilder,private http:HttpClient) {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      theater: ['', Validators.required],
      rate: [ , Validators.required],
    seats:[ ,Validators.required],
    description: ['', Validators.required],
     time: ['', Validators.required],
      coverimagetitle: ['', Validators.required],
      cast1name: ['', Validators.required],
      cast2name: ['', Validators.required],
      cast3name: ['', Validators.required],
      cast4name: ['', Validators.required],
      // coverimage: null,
      // cast1image: null,
      // cast2image: null,
      // cast3image: null,
      // cast4image: null
    });
  }


  onFileChange(event) {
    let reader = new FileReader();
    let file:any[5];
    if(event.target.files && event.target.files.length > 0) {
        //file[0]= event.target.files[0];
      // file[1] = event.target.files[1];
      // file[2]= event.target.files[2];
      // file[3] = event.target.files[3];
      // file[4]= event.target.files[4];
    
      reader.readAsDataURL(file);
     
    }
  }

  onSubmit() {
     const formModel = this.form.value;
    //this.loading = true;
   
      this.http.post('MyMovies/upload', formModel).subscribe();
    setTimeout(() => {
      console.log(formModel);
      alert('done!');
      //this.loading = false;
    }, 1000);  
    //      let body = new FormData();
    // // Add file content to prepare the request
    // body.append("file", this.file[0]);
    // body.append("file", this.file[1]);
    // body.append("file", this.file[2]);
    // body.append("file", this.file[3]);
    // body.append("file", this.file[4]); 


    // Launch post request
    //  this.http.post('MovieApp/upload',body)
    // .subscribe(
    //   // Admire results
    //   (data) => {console.log(data)},
    //   // Or errors :-(
    //   error => console.log(error),
    //   // tell us if it's finished
    //   () => { console.log("completed") }
    // );  
  }
  ngOnInit() {
    
  }
  form1=new FormGroup({
    title:new FormControl("",[Validators.required,]),
   /*  Validators.minLength(3),
    UsernameValidators.cannotContainSpace, */
    // UsernameValidators.shouldBeUnique,
  theater:new FormControl("",[Validators.required,]),
  rate:new FormControl("",[Validators.required,]),
  description:new FormControl("",[Validators.required]),
  seats:new FormControl("",[Validators.required]),
  //show:new FormControl("",[Validators.required,]),
  coverimagetitle:new FormControl("",[Validators.required,]),
 // coverimage:new FormControl("",[Validators.required,]),
  cast1name:new FormControl("",[Validators.required,]),
  //cast1image:new FormControl("",[Validators.required,]),
  cast2name:new FormControl("",[Validators.required,]),
 // cast2image:new FormControl("",[Validators.required,]),
  cast3name:new FormControl("",[Validators.required,]),
  //cast3image:new FormControl("",[Validators.required,]),
  cast4name:new FormControl("",[Validators.required,]),
 // cast4image:new FormControl("",[Validators.required,]),
  });
  get Title(){
    return this.form.get('title');
  }
  get Theater(){
    return this.form.get('theater');
  }
  get Rate(){
    return this.form.get('rate');
  }
  // get Show(){
  //   return this.form.get('show');
  // }
  get CoverImageTitle(){
    return this.form.get('coverimagetitle');
  }
  get CoverImage(){
    return this.form.get('coverimage');
  }
  get Cast1Name(){
    return this.form.get('cast1name');
  }
  // get Cast1Image(){
  //   return this.form.get('cast1image');
  // }
  get Cast2Name(){
    return this.form.get('cast2name');
  }
  // get Cast2Image(){
  //   return this.form.get('cast2image');
  // }
  get Cast3Name(){
    return this.form.get('cast3name');
  }
  get Cast4Name(){
    return this.form.get('cast4name');
  }
  // get Cast3Image(){
  //   return this.form.get('cast3image');
  // }
  // get Cast4Image(){
  //   return this.form.get('cast4image');
  // }
  get Show(){
    return this.form.get('show');
  }
  get Description(){
    return this.form.get('description');
  }
  get Seats(){
    return this.form.get('seats');
  }
}


