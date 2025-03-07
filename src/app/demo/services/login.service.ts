import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:3000/auth';
    constructor(private http:HttpClient) { }
    login(loginForm:any){
      return this.http.post<any>("http://localhost:8089/api/v2/auth/login",loginForm);
    }
}
