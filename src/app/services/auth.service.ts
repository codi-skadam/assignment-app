import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isUserLoggednIn:boolean =false;
  constructor() {
    this.isUserLoggednIn = localStorage.getItem('currentUser') ? true : false;
   }

  login(payload){
    if(payload.username === 'admin' && payload.password==='admin'){
      localStorage.setItem('currentUser', JSON.stringify(payload));
      this.isUserLoggednIn = true;
    }
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.isUserLoggednIn = false;
  }

  getLoggedInUser() {
   return this.isUserLoggednIn;
  }
}
