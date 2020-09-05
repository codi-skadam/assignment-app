import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  theme$: Observable<string>
  constructor(private stateStore: Store<{ theme: string }>){
    this.theme$ = stateStore.pipe(select('theme'));
    console.log(this.theme$);
  }

  ngOnInit(){
    setTimeout(() => {
      console.log(this.theme$);
      
    }, 10000);
  }
}
