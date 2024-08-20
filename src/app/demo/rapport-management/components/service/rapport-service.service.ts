import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Page } from '../modeles/Page';
import { Observable } from 'rxjs';
import { MyOoredooApp } from '../modeles/my-ooredoo-app';
import { ReportedDataVol } from '../modeles/reported-data';
import { VolDataByUsers } from '../modeles/vol-data';

@Injectable({
  providedIn: 'root'
})
export class RapportServiceService {
  private baseUrl = 'http://localhost:8089/api/rapport/entities';
  constructor(private http:HttpClient) { }
  getMyooredoo(){
    return this.http.get<any[]>("http://localhost:8089/api/rapport/myooredoo");
  }
  getReportedData(){
    return this.http.get<any[]>("http://localhost:8089/api/rapport/reportedData");
  }
  getVolData(){
    return this.http.get<any[]>("http://localhost:8089/api/rapport/volData");
  } 
  getEntitiesOoredoo(page: number, size: number): Observable<Page<MyOoredooApp>> {
    return this.http.get<Page<MyOoredooApp>>(`${"http://localhost:8089/api/rapport/entities"}?page=${page}&size=${size}`);
  }
  getEntitiesReportedData(page: number, size: number): Observable<Page<ReportedDataVol>> {
    return this.http.get<Page<ReportedDataVol>>(`${"http://localhost:8089/api/rapport/entitiesRD"}?page=${page}&size=${size}`);
  }
  getEntitiesVolData(page: number, size: number): Observable<Page<VolDataByUsers>> {
    return this.http.get<Page<VolDataByUsers>>(`${"http://localhost:8089/api/rapport/entitiesVolD"}?page=${page}&size=${size}`);
  }



  }

