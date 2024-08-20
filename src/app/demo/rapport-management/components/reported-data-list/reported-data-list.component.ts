import { Component } from '@angular/core';
import { RapportServiceService } from '../service/rapport-service.service';
import { Router } from '@angular/router';
import { ReportedDataVol } from '../modeles/reported-data';

@Component({
  selector: 'app-reported-data-list',
  templateUrl: './reported-data-list.component.html',
  styleUrls: ['./reported-data-list.component.scss']
})
export class ReportedDataListComponent {
  reportedList!: ReportedDataVol[] ;
  
  page: number = 0;
  size: number = 30;
  totalPages: number = 0;
  constructor( private rapportService:  RapportServiceService, private router:Router) {}
  ngOnInit(): void {
    this.loadEntities();
  
  }

  getAllRapport(){
    this.rapportService.getMyooredoo().subscribe(res=>{
     this.reportedList=res;
     
    })
   }
   loadEntities(): void {
    this.rapportService.getEntitiesReportedData(this.page, this.size).subscribe(data => {
      this.reportedList = data.content;
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
