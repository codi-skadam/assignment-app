import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SnackbarService } from './services/snackbar.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  theme$: Observable<string>
  
  constructor(private stateStore: Store<{ theme: string }>,public snackbarService:SnackbarService){
    this.theme$ = stateStore.pipe(select('theme'));
  }

  ngOnInit(){
  }
}
