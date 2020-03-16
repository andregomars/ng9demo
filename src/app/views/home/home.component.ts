import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

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
    this.asyncLoad();
  }

  private asyncLoad() {
    setTimeout(() => {
      console.log('async')
      this.loadContent();
    }, environment.delay);
  }

  private syncLoad() {
    const end = Date.now() + environment.delay;
    while (Date.now() < end) continue
    this.loadContent();
  }

  private loadContent() {
    this.title = `Static Ng9 delays ${environment.delay}ms`;
    this.show$.next(true);
  }

}
