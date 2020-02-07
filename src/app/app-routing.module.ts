import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: './views/home/home.module#HomeModule' },
  { path: 'infinitescroll', loadChildren: './views/about/about.module#AboutModule' },
  { path: 'virtualscroll', loadChildren: './views/virtualscroll/virtualscroll.module#VirtualScrollModule' },
  { path: 'cdkscroll', loadChildren: './views/cdkscroll/cdkscroll.module#CdkScrollModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
