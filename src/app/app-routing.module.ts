import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuoteDisplayComponentComponent } from './quote-display-component/quote-display-component.component';
import { LoginComponent } from './login/login.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';

const routes: Routes = [
  { path: '', component: QuoteDisplayComponentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'add-quote', component: AddQuoteComponent },
  { path: '**', component: QuoteDisplayComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
