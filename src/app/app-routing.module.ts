import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuoteDisplayComponentComponent } from './quote-display-component/quote-display-component.component';
import { LoginComponent } from './login/login.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { RegistrationComponent } from './registration/registration.component';
import {AuthGuard} from './auth/auth.guard'

const routes: Routes = [
  { path: '', redirectTo:'quotes-list',pathMatch:'full' },
  { path: 'quotes-list', component: QuoteDisplayComponentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'add-quote', component: AddQuoteComponent,canActivate:[AuthGuard]},
  { path: 'edit-quote', component: AddQuoteComponent,canActivate:[AuthGuard]},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
