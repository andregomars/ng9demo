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
            logo: "https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/NE.svg"
        },
        {
            name: "Bills",
            logo: "https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/BUF.svg"
        },
        {
            name: "Jets",
            logo: "https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/NYJ.svg"
        },
        {
            name: "Dolphins",
            logo: "https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/MIA.svg"
        },
        {
            name: "Ravens",
            logo: "https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/BAL.svg"
        },
        {
            name: "Steelers",
            logo: "https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/PIT.svg"
        },
        {
            name: "Browns",
            logo: "https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/CLE.svg"
        },
        {
            name: "Bengals",
            logo: "https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/CIN.svg"
        },
        {
            name: "Texans",
            logo: "https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/HOU.svg"
        },
        {
            name: "Titans",
            logo: "https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/TEN.svg"
        },
        {
            name: "Colts",
            logo: "https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/IND.svg"
        },
        {
            name: "Jaguars",
            logo: "https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/JAX.svg"
        },
        {
            name: "Chiefs",
            logo: "https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/KC.svg"
        },
        {
            name: "Broncos",
            logo: "https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/DEN.svg"
        },
    ];
   }
}