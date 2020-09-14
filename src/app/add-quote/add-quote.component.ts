import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import {QuotesServiceService} from '../services/quotes-service.service'
import {SnackbarService} from '../services/snackbar.service'
import {Router,ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router"
import {IQuotes} from '../models/quotes'

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.scss']
})
export class AddQuoteComponent implements OnInit {

  quoteForm:FormGroup;
  isEdit:boolean=false;
  quoteData:IQuotes;

  constructor(
    private formBuilder: FormBuilder,
    private quotesService:QuotesServiceService,
    private router: Router,
    public activatedRoute: ActivatedRoute,
    private snackbarService:SnackbarService
    ) {
    this.generateForm();
  }

  ngOnInit(): void {
    if (this.router.url === '/edit-quote'){
      this.isEdit = true;
      this.quoteData = history.state;
      this.quoteForm.patchValue(this.quoteData);
    }
  }

  generateForm(){
    this.quoteForm = this.formBuilder.group({
      quote: [''],
      authorName: [''],
    });
  }

  saveQuote() {
    this.quotesService.addQuote({...this.quoteForm.value}).subscribe(resp=>{
      if(resp){
        this.snackbarService.setSnackBar('Quote is Added Successfully','success');
        this.router.navigate(['/']);
      }
    },(error)=>{
      console.log(error);
    })
  }

  updateQuote () {
    this.quotesService.updateQuote(this.quoteForm.value,this.quoteData).subscribe(resp=>{
      if(resp){
        this.snackbarService.setSnackBar('Quote is Updated Successfully','success');
        this.router.navigate(['quotes-list']);
      }
    },(error)=>{
      console.log(error);
    })
  }

  ngOnDestroy(): void {
  this.isEdit = false;
  this.quoteForm.reset();
  }

}
