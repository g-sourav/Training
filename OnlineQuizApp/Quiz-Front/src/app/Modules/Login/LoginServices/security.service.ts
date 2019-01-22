import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SecurityQuestion } from 'src/app/Models/SecurityQuestion';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  http: HttpClient;
  constructor(
    private h: HttpClient, 
    private router: Router
    ) { this.http = h; }
  loginServ() {
    console.log("Login service");
    return this.h.get<SecurityQuestion[]>('/QuizApp-1.0.0/User/securityquestion');
    }
}
