import { Component, OnInit } from '@angular/core';
import { Team } from '../../models/team';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  items: Team[] = [];
  teams: Team[];
  batchSize: number;
  batchStart = 0;
  isTeamsScrollFinished = false;
  verbose$: Observable<string>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.teams = this.dataService.getTeams();
    this.verbose$ = this.dataService.getIpsum();
    this.batchSize = this.dataService.isMobile() ? 2 : 4;
    this.onScroll();
  }

  onScroll() {
    console.warn('scroll')
    const batch = this.teams.slice(this.batchStart, this.batchStart + this.batchSize);
    this.batchStart += this.batchSize;
    this.items = this.items.concat(batch);
    if (this.batchStart > this.teams.length) {
      this.isTeamsScrollFinished = true;
    }
  }
}
