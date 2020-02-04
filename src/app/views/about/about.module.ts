import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';


@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    VirtualScrollerModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
