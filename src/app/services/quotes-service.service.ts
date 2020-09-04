import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SERVER_URL} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class QuotesServiceService {

  constructor(private http: HttpClient) { }

  getQuotes(){
    return this.http.get(SERVER_URL+'/quotes?_sort=id&_order=desc');
   }

   addQuote(payload){
     return this.http.post(SERVER_URL+'/quotes',payload);
   }

   deleteQuote(id){
     return this.http.delete(SERVER_URL+'/quotes/'+id);
   }
  }
