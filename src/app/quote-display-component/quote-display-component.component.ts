import { Component, OnInit } from '@angular/core';
import {QuotesServiceService} from '../services/quotes-service.service'
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { addQuote,editQuote,deleteQuote,getQuote } from '../state/quotes.actions';

@Component({
  selector: 'app-quote-display-component',
  templateUrl: './quote-display-component.component.html',
  styleUrls: ['./quote-display-component.component.scss']
})
export class QuoteDisplayComponentComponent implements OnInit {
  quotesList:any;
  // quotes$: Observable<object>;
  constructor(private quotesService:QuotesServiceService,private store: Store<{quotes}>) {
    // this.quotes$ = store.pipe(select('quotes'));
    //    console.log(this.quotes$);
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

  deleteQuote (id) {
    this.quotesService.deleteQuote(id).subscribe(resp=>{
      if(resp){
        this.getQuotes();
      }
    })
  }

}
