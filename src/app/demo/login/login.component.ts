import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { error } from 'console';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form!: FormGroup;

  constructor(private loginservice:LoginService,
    private fb: FormBuilder,private toastr: ToastrService,private router:Router){}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ["", [Validators.required, Validators.email]], // Initialize email with an empty string
      password: ["", [Validators.required]], // Initialize password with an empty string
    });    }
    login() {
      if (this.form.valid) {
        const auth = {
          email: this.form.value.email,
          password: this.form.value.password
        };
        console.log("auth", auth);

        this.loginservice.login(auth).subscribe({
          next: (res: any) => {
            this.toastr.success("Succefuly logged In !", 'success');
            localStorage.setItem("token",res.token)
            this.router.navigate(['/home'])
          },
          error: (err: any) => {
            // Handle error response
            this.toastr.error(err.error.message, 'Error');
          }
        });
      }
    }



}
