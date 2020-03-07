import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Team } from '../../models/team';
import { DataService } from '../../services/data.service';
import { UtilityService } from 'src/app/services/utility.service';

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
  isTeamsScrollFinished = false;
  verbose$: Observable<string>;

  constructor(
    private utility: UtilityService,
    private dataService: DataService) { }

  ngOnInit() {
    this.utility.setHeaderTagsByPath();
    this.teams = this.dataService.getTeams();
    this.verbose$ = this.dataService.getIpsum();
    this.onScroll();
  }

  onScroll() {
    const batch = this.teams.slice(this.batchStart, this.batchStart + this.batchSize);
    this.batchStart += this.batchSize;
    this.items = this.items.concat(batch);
    if (this.batchStart > this.teams.length) {
      this.isTeamsScrollFinished = true;
    }
  }

}
