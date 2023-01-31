import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Topbookspage } from './topbooks.page';

const routes: Routes = [
  {
    path: '',
    component: Topbookspage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopbooksPageRoutingModule {}
