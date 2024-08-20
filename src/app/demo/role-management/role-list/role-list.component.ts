import { Component } from '@angular/core';
import { Role } from '../modeles/Role';
import { MatDialog } from '@angular/material/dialog';
import { RoleService } from '../service/role.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../../user-management/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent {
  roleList!: Role[]

  constructor(public dialog: MatDialog,  private roleService:RoleService, private toastr: ToastrService,private router:Router ) {}
  ngOnInit(): void {
    this.getAllRole();
    }
    getAllRole(){
      this.roleService.getRoles().subscribe(res=>{
       this.roleList=res;
      })
     }
     onDeleteClick(id:any): void {
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        width: '250px',
        data: { message: 'Are you sure you want to delete this user?' }
      });
  
      dialogRef.afterClosed().subscribe((result: any) => {
        if (result) {
          // Mettez ici votre logique de suppression
          console.log('Deletion done!    ');
          this.deleteUser(id)
        } else {
          console.log('Deletion canceled. ');
        }
      });
    }
    deleteUser(id:number){
      this.roleService.deleteRole(id).subscribe(res=>{
        this.getAllRole();
        this.toastr.success("Deletion done!", 'success');
      
      })
}}
