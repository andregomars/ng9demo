import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';


@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    MatCardModule,
    InfiniteScrollModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
