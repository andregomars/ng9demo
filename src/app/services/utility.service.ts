import { Injectable } from '@angular/core';
import { LinkDefinition, LinkService } from './link.service';
import { MetaDefinition, Meta, Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class UtilityService {

    constructor(private meta: Meta,
                private title: Title,
                private link: LinkService,
                private http: HttpClient
    ) { }

    setHeaderTagsByPath() {
        this.setHeaderTags(location.pathname.replace('/', ''));
    }

    private test() {
        const url = 'www.mocky.io/v2/5e6738d13100007b0023071d';
        return this.http.get<{name: string}>(url).subscribe(
            x => { console.log(x); }
        );
    }

    setHeaderTags(keyword: string) {
        this.title.setTitle(this.buildTitle(keyword));
        this.buildMetas(keyword).map(meta => {
            this.meta.updateTag(meta)
        });
        this.buildCopyRight().subscribe(copyright => this.meta.updateTag(copyright));
        this.buildIpMeta().subscribe(ipAddress => this.meta.updateTag(ipAddress));
        this.link.updateTag(this.buildCanonical(keyword));
    }

    private buildTitle(path: string): string {
        return `${path} demo`;
    }

    private buildCanonical(path: string): LinkDefinition {
        return {
            rel: 'canonical',
            href: `${location.origin}/${path}`
        }
    }

    private buildMetas(path: string): MetaDefinition[] {
        return [
            {
                name: 'description',
                content: `demo for ${path}`
            },
            {
                httpEquiv: 'ROBOTS',
                name: 'ROBOTS',
                content: 'INDEX, FOLLOW'
            }
        ]
    }

    private buildIpMeta(): Observable<MetaDefinition> {
        const url = '//api.ipify.org?format=json';
        return this.http.get<{ip: string}>(url).pipe(
            map(data => {
                return {
                    name: 'customerIP',
                    content: data.ip
                };
            })
        );
    }

    private buildCopyRight(): Observable<MetaDefinition> {
        const url = '//www.mocky.io/v2/5e673944310000a700230721';
        return this.http.get<{copyright: string}>(url).pipe(
            map(data => {
                return {
                    name: 'copyright',
                    content: data.copyright
                };
            })
        );
    }

}
