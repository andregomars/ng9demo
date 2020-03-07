import { Injectable } from '@angular/core';
import { LinkDefinition, LinkService } from './link.service';
import { MetaDefinition, Meta, Title } from '@angular/platform-browser';

@Injectable({
    providedIn: 'root',
})
export class UtilityService {

    constructor(private meta: Meta,
        private title: Title,
        private link: LinkService,
    ) { }

    setHeaderTagsByPath() {
        this.setHeaderTags(location.pathname.replace('/', ''));
    }

    setHeaderTags(keyword: string) {
        this.title.setTitle(this.buildTitle(keyword));
        this.buildMetas(keyword).map(meta => {
            this.meta.updateTag(meta)
        });
        // this.link.addTag(this.buildCanonical(keyword));
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

}
