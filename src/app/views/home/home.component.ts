import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Static Ng9';
  show$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  ngOnInit() {
    this.title = `Ng9`;
    this.show$.next(true);
  }

}
