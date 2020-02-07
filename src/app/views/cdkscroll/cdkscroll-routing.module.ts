import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CdkScrollComponent } from './cdkscroll.component';


const routes: Routes = [
  { path: '', component: CdkScrollComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CdkScrollRoutingModule { }
