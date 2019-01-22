import { Component, OnInit } from '@angular/core';
import { petService } from 'src/app/api/pet.service';
import { pet } from '../pet';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-petreg',
  templateUrl: './petreg.component.html',
  styleUrls: ['./petreg.component.css']
})

export class PetregComponent implements OnInit {
  pets: petService;
  pet: pet[];
  obj: pet = new pet();
  petform: FormGroup;
  selectedFile: File;
  frm;

  category = ['select', 'bird', 'cat', 'dog', 'fish', ' horse'];

  constructor(private pService: petService, private fb: FormBuilder, private http: HttpClient) {
    this.pets = pService;
   }
   p = new pet();

  ngOnInit() {
    this.petform = this.fb.group({
      pet_name: '',
      category: '',
      breed: '',
      age: '',
      gender: '',
      location: '',
      sold: '',
      bio: '',
      price: '',
    });
  }
create(form) {
 this.pService.createPet(form);
}

onFileChanged(event) {
  this.selectedFile = event.target.files[0];
}
onUpload() {
  const uploadData = new FormData();
  uploadData.append('file', this.selectedFile, this.selectedFile.name);
  this.http.post('admin/image', uploadData).subscribe(
    response => {
      console.log('file');
    }
  );
}
}
