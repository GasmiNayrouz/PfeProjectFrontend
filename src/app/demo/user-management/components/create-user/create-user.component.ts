import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importez Router
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from 'src/app/demo/role-management/service/role.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
  listUser: any[]=[]
  listRole: any[]=[]
  isSubmitting:boolean = false
  validationErrors:any = []
  form!: FormGroup;
  constructor(private userService: UserService, private router: Router,  private fb: FormBuilder, private roleService:RoleService,
    private toastr: ToastrService,private builder:FormBuilder) { 
      
    }


    ngOnInit(): void {
      this.roleService.getRoles().subscribe(res=>{
        this.listRole=res;
       })
      // listRole
      this.form = this.fb.group({
        username: ["", [Validators.required]],
        phoneNumber : ["", [Validators.required]],
        matricule: ["", [Validators.required]],
        email: ["", [Validators.required, Validators.email]],
        password: [this.generatePassword(), [Validators.required]],
        role: ["", [Validators.required]],
      });    }
  onSubmit(): void {
     console.log(this.form.value)

      this.userService.createUser(this.form.value).subscribe(res=>{
        this.toastr.success("User Created successfully !", 'success');
        this.router.navigate(['user/users-list']);
         console.log(res)
      },error=>{
        this.toastr.error(error.error.error, 'error');

      console.log(error,"eeeeeeee")
      })
  }

  private generatePassword(): string {
    const length = 8;
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = ''; 
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  }
 

//  submitEdit() {
   // console.log('Modifications soumises : ', this.user);
  //}
  //submitForm(): void {
  }
  

