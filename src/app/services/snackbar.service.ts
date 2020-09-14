import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  text:string='';
  type:string='';
  isSnackbarActive:boolean=false;
  constructor() { }
  setSnackBar(message,type){
    this.text = message;
    this.type = type;
    this.isSnackbarActive = true;
    setTimeout(() => {
      this.text = '';
      this.type = '';
      this.isSnackbarActive = false;
    }, 5000);
  }
}
