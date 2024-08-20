import { Component } from '@angular/core';
import { RoleService } from '../service/role.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent {
  listRole: any[]=[]
  form!: FormGroup;
  constructor(private roleService:RoleService, private router: Router,  private fb: FormBuilder,
    private toastr: ToastrService,private builder:FormBuilder) { 
      
    }

    ngOnInit(): void {
      //serviceRole getAllrole 
      // listRole
      this.roleService.getRoles().subscribe(res=>{
        this.listRole=res;
       })
      this.form = this.fb.group({
        name: ["", [Validators.required]],
       
       
      });    }
      onSubmit(): void {
     console.log(this.form.value)

      this.roleService.saveRole(this.form.value).subscribe(res=>{
        this.toastr.success("Role Created successfully !", 'success');
        this.router.navigate(['user/users-list']);
         console.log(res)
      },error=>{
        this.toastr.error(error.error.error, 'error');

      console.log(error,"eeeeeeee")
      })
  }
  

}
