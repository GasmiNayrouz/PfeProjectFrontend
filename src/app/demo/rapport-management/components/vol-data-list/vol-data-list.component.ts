import { Component } from '@angular/core';
import { VolDataByUsers } from '../modeles/vol-data';
import { RapportServiceService } from '../service/rapport-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vol-data-list',
  templateUrl: './vol-data-list.component.html',
  styleUrls: ['./vol-data-list.component.scss']
})
export class VolDataListComponent {
  volDataList!: VolDataByUsers[] ;
  
  
  page: number = 0;
  size: number = 30;
  totalPages: number = 0;
  constructor( private rapportService:  RapportServiceService, private router:Router) {}
  ngOnInit(): void {
    this.loadEntities();
  
  }

  getAllRapport(){
    this.rapportService.getVolData().subscribe(res=>{
     this.volDataList=res;
     
    })
   }
   loadEntities(): void {
    this.rapportService.getEntitiesVolData(this.page, this.size).subscribe(data => {
      this.volDataList = data.content;
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
