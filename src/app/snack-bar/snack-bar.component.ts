import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent implements OnInit {

  @Input() text:string;
  @Input() type:string;

  constructor() { }
  ngOnInit(): void {
  }

}
