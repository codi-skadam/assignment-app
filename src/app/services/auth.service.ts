import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isUserLoggednIn:boolean =false;
  constructor(private http: HttpClient) {
    this.isUserLoggednIn = localStorage.getItem('currentUser') ? true : false;
   }

  login(payload){
    if(payload.username === 'admin' && payload.password==='admin'){
      localStorage.setItem('currentUser', JSON.stringify(payload));
      this.isUserLoggednIn = true;
    }
  }

  register(payload){
    console.log(payload);
    return this.http.post(SERVER_URL+'/users',payload);
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.isUserLoggednIn = false;
  }

  getLoggedInUser() {
   return this.isUserLoggednIn;
  }
}
