import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_URL } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isUserLoggednIn:boolean = false;
  constructor(private http: HttpClient,private router:Router) {
    this.isUserLoggednIn = localStorage.getItem('currentUser') ? true : false;
   }

  login(payload){
    if(payload){
      this.http.get(SERVER_URL+'/users?username='+payload.username).subscribe(resp=>{
        if(resp && resp[0].password === payload.password){
          localStorage.setItem('currentUser', JSON.stringify(payload));
          this.router.navigate(['/quotes-list']);
          this.isUserLoggednIn = true;
        }else {
          this.isUserLoggednIn = false;
        }
      },(error)=>{
        console.log(error);
      });     
    }
  }

  register(payload){
    return this.http.post(SERVER_URL+'/users',payload);
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.isUserLoggednIn = false;
  }

  isUserAuthenticated() {
   return this.isUserLoggednIn;
  }
}
