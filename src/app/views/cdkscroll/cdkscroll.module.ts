import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatCardModule } from '@angular/material/card';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';

import { CdkScrollRoutingModule } from './cdkscroll-routing.module';
import { CdkScrollComponent } from './cdkscroll.component';

@NgModule({
  declarations: [CdkScrollComponent],
  imports: [
    CommonModule,
    MatCardModule,
    ScrollingModule,
    VirtualScrollerModule,
    CdkScrollRoutingModule
  ]
})
export class CdkScrollModule { }
