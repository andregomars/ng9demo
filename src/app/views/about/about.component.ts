import { Component, OnInit } from '@angular/core';
import { Team } from '../../models/team';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  items: Team[] = [];
  teams: Team[];
  batchSize = 4;
  batchStart = 0;
  finished = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.teams = this.dataService.getTeams();
    this.onScroll();
  }

  onScroll() {
    const batch = this.teams.slice(this.batchStart, this.batchStart + this.batchSize);
    this.batchStart += this.batchSize;
    this.items = this.items.concat(batch);
  }
}
