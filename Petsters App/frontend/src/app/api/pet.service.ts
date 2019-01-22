import { Injectable } from '@angular/core';
import { pet } from 'src/app/pet';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class petService {

  http: HttpClient;
  statusRes: String;

  baseUrl: String = 'http://localhost:8520/admin/';

  constructor(h: HttpClient) {
    this.http = h;
  }


public createPet(form) {
  console.log('pet service');
  this.http.post('/PETSTERS/admin/pet', form).subscribe();
}

public updatePet(pet: pet) {
  console.log('pet service');
  console.log(pet.pet_name);  console.log(pet.category);  console.log(pet.breed);  console.log(pet.age);
  console.log(pet.gender);  console.log(pet.location);  console.log(pet.sold);  console.log(pet.bio);
  return this.http.put('/PETSTERS/admin/pet', pet);
}

getPet(id: String) {
  console.log(" inside getPet ");
console.log(id);

  return this.http.get('/PETSTERS/admin/getpet/' + Number(id));
}

getpets() {
  return this.http.get<pet[]>('/PETSTERS/admin/pets');
}
changePetStatus(id:string){
  console.log("inside set status");
  console.log(id);
  return this.http.put('/PETSTERS/admin/setStatus/', Number(id)).subscribe(
    response=>console.log(response)
  );
}
/*
displayStatus(data){
  console.log('from displayStatus...method..' + data);
  console.log(data);
}
deleteArticle(id:String){
  console.log(id);
  return this.http.delete(this.baseUrl +'article/'+id);}

  
*/

}
