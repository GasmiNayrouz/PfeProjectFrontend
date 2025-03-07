import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { User } from '../modeles/user.model';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Role } from 'src/app/demo/role-management/modeles/Role';
import { RoleService } from 'src/app/demo/role-management/service/role.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  usersList!: User[] ;
  role:Role| undefined;
  roleId: number = 0;
  constructor(public dialog: MatDialog,private userService: UserService, private roleService:RoleService, private toastr: ToastrService,private router:Router ) {}
  ngOnInit(): void {
    this.getllUser();
    this.getRole(this.roleId);

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
  getllUser(){
   this.userService.getUsers().subscribe(res=>{
    this.usersList=res;
   })
  }
  deleteUser(id:number){
this.userService.deleteUser(id).subscribe(res=>{
  this.getllUser();
  this.toastr.success("Deletion done!", 'success');

})
  }
  details(id:number){
    this.router.navigate(['user/view-user', id]);
  }
  getRole(roleId:number){
    this.roleService.getRoleById(this.roleId).subscribe(
      (role : Role) => {
        this.role= role;
      },
      (error: any) => {
        console.error(error);
      }
    );
}
editUser(userId: number): void {
  this.router.navigate(['user/edit-user', userId]);
}}
