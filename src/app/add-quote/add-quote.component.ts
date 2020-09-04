import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {QuotesServiceService} from '../services/quotes-service.service'
import {Router} from "@angular/router"

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.scss']
})
export class AddQuoteComponent implements OnInit {

  quoteForm = new FormGroup({
    quote: new FormControl(''),
    authorName: new FormControl(''),
  });
  constructor(private quotesService:QuotesServiceService,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.quotesService.addQuote(this.quoteForm.value).subscribe(resp=>{
      if(resp){
        this.router.navigate(['/']);
      }
      console.log(resp);
    })
  }

}
