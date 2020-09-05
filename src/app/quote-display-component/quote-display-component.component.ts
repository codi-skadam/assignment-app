import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {QuotesServiceService} from '../services/quotes-service.service'
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-quote-display-component',
  templateUrl: './quote-display-component.component.html',
  styleUrls: ['./quote-display-component.component.scss']
})
export class QuoteDisplayComponentComponent implements OnInit {
  quotesList:any;

  constructor(private quotesService:QuotesServiceService, private router:Router,public authService:AuthService) {

   }

  ngOnInit(): void {
   this.getQuotes();
  }

  getQuotes(){
    this.quotesService.getQuotes().subscribe(resp=>{
      if(resp){
        this.quotesList = resp;
      }
    })
  }

  trackByFn(index) {
    return index;
    }

  deleteQuote (id) {
    this.quotesService.deleteQuote(id).subscribe(resp=>{
      if(resp){
        this.getQuotes();
      }
    })
  }

}
