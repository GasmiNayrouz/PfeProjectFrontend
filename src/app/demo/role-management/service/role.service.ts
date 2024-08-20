import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from '../modeles/Role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }
  saveRole(data:any){
    return this.http.post<any>("http://localhost:8089/api/v2/role/saveRole",data);
  }
  deleteRole(id:Number):Observable<Object>{
    return this.http.delete("http://localhost:8089/api/v2/role/deleteRole/"+id);
  }
  getRoles(): Observable<Role[]> {
    return this.http.get<any[]>("http://localhost:8089/api/v2/role/allRole");
  
  }
  updateRole(role: Role): Observable<object> {
    return this.http.put<any[]>("http://localhost:8089/api/v2/role/updateRole",role);
  }
  getRoleById(id:number): Observable<Role> {
    return this.http.get<any>("http://localhost:8089/api/v2/role/get/"+id);
  }
  
}
