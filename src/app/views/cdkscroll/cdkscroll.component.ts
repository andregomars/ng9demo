import { Component, OnInit } from '@angular/core';
import { Team } from '../../models/team';
import { DataService } from '../../services/data.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-cdkscroll',
  templateUrl: './cdkscroll.component.html',
  styleUrls: ['./cdkscroll.component.scss']
})
export class CdkScrollComponent implements OnInit {
  teams: Team[];
  teamRows: Array<Team>[];

  constructor(
    private utility: UtilityService,
    private dataService: DataService) { }

  ngOnInit() {
    this.utility.setHeaderTagsByPath();
    this.teams = this.dataService.getTeams();
    const list = this.dataService.getTeams();
    const size = this.dataService.mobile() ? 1 : 4;
    this.teamRows = this.dataService.getScrollableList<Team>(list, size);
  }

}
