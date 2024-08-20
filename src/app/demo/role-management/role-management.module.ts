import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleListComponent } from './role-list/role-list.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { RoleManagementRoutingModule } from './role-management-routing.module';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationDialogComponent } from '../user-management/components/confirm-dialog/confirm-dialog.component';



@NgModule({
  declarations: [
    RoleListComponent,
    AddRoleComponent
  ],
  imports: [
    CommonModule,
    RoleManagementRoutingModule,
     SharedModule,
     MatDialogModule,
    ReactiveFormsModule,
    FormsModule

    ]
})
export class RoleManagementModule { }
