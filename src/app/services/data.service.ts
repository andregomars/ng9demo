import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Team } from '../models/team';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    constructor(private http: HttpClient) {
    }

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
            {
                name: "Raiders",
                logo: "https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/OAK.svg"
            },
            {
                name: "Chargers",
                logo: "https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/LAC.svg"
            },
            {
                name: "Eagles",
                logo: "https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/PHI.svg"
            },
            {
                name: "Cowboys",
                logo: "https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/DAL.svg"
            },
            {
                name: "Giants",
                logo: "https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/NYG.svg"
            },
            {
                name: "Redskins",
                logo: "https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/WAS.svg"
            },
            {
                name: "Packers",
                logo: "https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/GB.svg"
            },
            {
                name: "Vikings",
                logo: "https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/MIN.svg"
            },
            {
                name: "Bears",
                logo: "https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/CHI.svg"
            },
            {
                name: "Lions",
                logo: "https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/DET.svg"
            },
            {
                name: "Saints",
                logo: "https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/NO.svg"
            },
            {
                name: "Falcons",
                logo: "https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/ATL.svg"
            },
            {
                name: "Buccaneers",
                logo: "https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/TB.svg"
            },
            {
                name: "Panthers",
                logo: "https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/CAR.svg"
            },
            {
                name: "49ers",
                logo: "https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/SF.svg"
            },
            {
                name: "Seahawks",
                logo: "https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/SEA.svg"
            },
            {
                name: "Rams",
                logo: "https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/LA.svg"
            },
            {
                name: "Cardinal",
                logo: "https://static.nfl.com/static/content/public/static/wildcat/assets/img/logos/teams/ARI.svg"
            },
        ];
    }

    getScrollableList<T>(list: Array<T>, size: number): Array<T>[] {
        const chunks = [];
        while (list.length > 0 && size > 0) {
            chunks.push(list.splice(0, size));
        }
        return chunks;
    }

    isMobile(): boolean {
        const userAgent = navigator.userAgent;
        return /\b(iPhone|iP[ao]d)/.test(userAgent) ||
            /\b(iP[ao]d)/.test(userAgent) ||
            /Android/i.test(userAgent) ||
            /Mobile/i.test(userAgent) ||
            window.innerWidth <= 768;
    }

    getIpsum(): Observable<string> {
        const url = '//www.mocky.io/v2/5e4394cf310000383f3affcb';
        return this.http.get<string>(url).pipe(
            map((x: any) => x.text)
        );
    }
}
