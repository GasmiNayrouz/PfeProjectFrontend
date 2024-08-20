import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../modeles/user.model';
import { Role } from 'src/app/demo/role-management/modeles/Role';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}
  

  getUserById(id:number): Observable<User> {
    return this.http.get<any>("http://localhost:8089/api/v2/user/get/"+id);
  }
  


  
 
  register(data:any){
    return this.http.post<any>("http://localhost:8089/api/v2/user/inscription",data);

  }
  createUser(data:any){
    return this.http.post<any>("http://localhost:8089/api/v2/user/saveU",data);

  }
  
  
 
  getUsers(){
    return this.http.get<any[]>("http://localhost:8089/api/v2/user/all");
  }
 
  deleteUser(id:Number):Observable<Object>{
    return this.http.delete("http://localhost:8089/api/v2/user/delete/"+id);
  }
  
  
  
   updateUser(user: User): Observable<object> {
    return this.http.put<any[]>("http://localhost:8089/api/v2/user",user);
  }
  



  
}