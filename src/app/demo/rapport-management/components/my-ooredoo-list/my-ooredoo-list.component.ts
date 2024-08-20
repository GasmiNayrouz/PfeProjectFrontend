import { Component } from '@angular/core';

import { RapportServiceService } from '../service/rapport-service.service';
import { Router } from '@angular/router';
import { MyOoredooApp } from '../modeles/my-ooredoo-app';

@Component({
  selector: 'app-my-ooredoo-list',
  templateUrl: './my-ooredoo-list.component.html',
  styleUrls: ['./my-ooredoo-list.component.scss']
})
export class MyOoredooListComponent {
  myOoredooList!: MyOoredooApp[] ;
  
  page: number = 0;
  size: number = 30;
  totalPages: number = 0;
  constructor( private rapportService:  RapportServiceService, private router:Router) {}
  ngOnInit(): void {
    this.loadEntities();
  
  }

  getAllRapport(){
    this.rapportService.getMyooredoo().subscribe(res=>{
     this.myOoredooList=res;
     
    })
   }
   loadEntities(): void {
    this.rapportService.getEntitiesOoredoo(this.page, this.size).subscribe(data => {
      this.myOoredooList = data.content;
      this.totalPages = data.totalPages;
      
    });
  }

  nextPage(): void {
    if (this.page < this.totalPages - 1) {
      this.page++;
      this.loadEntities();
    }
  }

  previousPage(): void {
    if (this.page > 0) {
      this.page--;
      this.loadEntities();
    }
  }

}
