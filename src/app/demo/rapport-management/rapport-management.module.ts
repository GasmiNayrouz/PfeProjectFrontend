import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOoredooListComponent } from './components/my-ooredoo-list/my-ooredoo-list.component';
import { VolDataListComponent } from './components/vol-data-list/vol-data-list.component';
import { ReportedDataListComponent } from './components/reported-data-list/reported-data-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from 'src/app/app.component';
import { BrowserModule } from '@angular/platform-browser';
import { RapportManagementRoutingModule } from './RapportManagementRoutingModule';



@NgModule({
  declarations: [
    MyOoredooListComponent,
    VolDataListComponent,
    ReportedDataListComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    SharedModule,
    MatDialogModule,
    RapportManagementRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class RapportManagementModule { }
