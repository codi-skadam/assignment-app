import { AuthService } from '../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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

  login() {
    this.AuthService.login(this.loginForm.value);
  }

}
