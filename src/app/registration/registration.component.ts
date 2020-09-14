import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {IUser} from '../models/user';
import { SnackbarService } from '../services/snackbar.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private formBuilder: FormBuilder,private AuthService:AuthService,private router:Router,private snackbarService:SnackbarService) { }

  ngOnInit(): void {
    this.generateForm();
  }

  generateForm(){
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: [''],
    });
  }
  register() {
    this.AuthService.register(this.loginForm.value).subscribe(resp=>{
      this.router.navigate(['/login']);
      this.snackbarService.setSnackBar('User Added Successfully','success');
    },(error)=>{
      console.log(error);
      this.snackbarService.setSnackBar('User add failed','danger');
    });
  }

}
