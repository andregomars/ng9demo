import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: './views/home/home.module#HomeModule' },
  { path: 'about', loadChildren: './views/about/about.module#AboutModule' },
  { path: 'virtualscroll', loadChildren: './views/virtualscroll/virtualscroll.module#VirtualScrollModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
