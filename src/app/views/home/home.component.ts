import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'ng9demo';
  delay = 1000;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      console.log('here the home init')
      this.title = `Static Ng9 delays ${this.delay}ms`;
    }, this.delay)
  }

}
