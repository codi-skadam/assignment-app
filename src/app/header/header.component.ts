import { AuthService } from '../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { changetheme } from '../state/theme.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  theme$: Observable<string>

  constructor(public authService:AuthService,private store: Store<{ theme: string }>,private router:Router) {
    this.theme$ = store.pipe(select('theme'));
   }

  ngOnInit(): void {
    
  }

 logout(){
   this.authService.logout();
   this.router.navigate(['/quotes-list']);
 }

 changeTheme(){
  this.store.dispatch(changetheme());
 }
  
}
