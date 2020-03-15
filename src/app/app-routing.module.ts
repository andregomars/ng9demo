import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule) },
  { path: 'infinitescroll', loadChildren: () => import('./views/about/about.module').then(m => m.AboutModule) },
  { path: 'virtualscroll', loadChildren: () => import('./views/virtualscroll/virtualscroll.module').then(m => m.VirtualScrollModule) },
  { path: 'cdkscroll', loadChildren: () => import('./views/cdkscroll/cdkscroll.module').then(m => m.CdkScrollModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
