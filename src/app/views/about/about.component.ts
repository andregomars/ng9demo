import { Component, OnInit } from '@angular/core';
import { Team } from '../../models/team';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  items: Team[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.items = this.dataService.getTeams();
  }

  onScroll() {
    console.log('scrolled');
  }
}
