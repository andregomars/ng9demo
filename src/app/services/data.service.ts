import { Injectable } from '@angular/core';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root',
})
export class DataService {
   getTeams(): Team[] {
       return [
        {
            name: "Patriots",
            logo: "http://i.nflcdn.com/static/site/7.5/img/teams/NE/NE_logo-80x90.gif"
        },
        {
            name: "Bills",
            logo: "http://i.nflcdn.com/static/site/7.5/img/teams/BUF/BUF_logo-80x90.gif"
        },
        {
            name: "Jets",
            logo: "http://i.nflcdn.com/static/site/7.5/img/teams/NYJ/NYJ_logo-80x90.gif"
        },
        {
            name: "Dolphins",
            logo: "http://i.nflcdn.com/static/site/7.5/img/teams/MIA/MIA_logo-80x90.gif"
        },
        {
            name: "Ravens",
            logo: "http://i.nflcdn.com/static/site/7.5/img/teams/BAL/BAL_logo-80x90.gif"
        },
        {
            name: "Steelers",
            logo: "http://i.nflcdn.com/static/site/7.5/img/teams/PIT/PIT_logo-80x90.gif"
        },
    ];
   }
}