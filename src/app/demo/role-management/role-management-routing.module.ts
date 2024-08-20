import { NgModule } from "@angular/core";
import { AddRoleComponent } from "./add-role/add-role.component";
import { RoleListComponent } from "./role-list/role-list.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
      path: 'add-role',
      component: AddRoleComponent
    },
  
    
    {
      path: 'role-list',
      component: RoleListComponent
    },
    
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  
  export class RoleManagementRoutingModule {}