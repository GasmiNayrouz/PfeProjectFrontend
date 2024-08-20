import { RouterModule, Routes } from "@angular/router";
import { MyOoredooListComponent } from "./components/my-ooredoo-list/my-ooredoo-list.component";
import { ReportedDataListComponent } from "./components/reported-data-list/reported-data-list.component";
import { VolDataListComponent } from "./components/vol-data-list/vol-data-list.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
      path: 'my-ooredoo-list',
      component: MyOoredooListComponent
    },
    {
      path: 'reported-data-list',
      component: ReportedDataListComponent
    },
    {
        path: 'vol-data-list',
        component: VolDataListComponent
      }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  
  export class RapportManagementRoutingModule {}
  