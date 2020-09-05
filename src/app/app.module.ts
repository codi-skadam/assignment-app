import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteDisplayComponentComponent } from './quote-display-component/quote-display-component.component';
import { HeaderComponent } from './header/header.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddQuoteComponent } from './add-quote/add-quote.component';

import { StoreModule } from '@ngrx/store';
import {themeReducer} from './state/theme.reducer';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteDisplayComponentComponent,
    HeaderComponent,
    AddQuoteComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({theme:themeReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
