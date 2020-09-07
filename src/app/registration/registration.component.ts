import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {IUser} from '../models/user';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private formBuilder: FormBuilder,private AuthService:AuthService,private router:Router) { }

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
    },(error)=>{
      console.log(error);
    });
  }

}
