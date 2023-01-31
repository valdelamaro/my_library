import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksDetailModalPage } from './books-detail-modal.page';

const routes: Routes = [
  {
    path: '',
    component: BooksDetailModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksDetailModalPageRoutingModule {}
