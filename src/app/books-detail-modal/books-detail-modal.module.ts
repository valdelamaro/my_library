import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BooksDetailModalPageRoutingModule } from './books-detail-modal-routing.module';

import { BooksDetailModalPage } from './books-detail-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BooksDetailModalPageRoutingModule
  ],
  declarations: [BooksDetailModalPage]
})
export class BooksDetailModalPageModule {}
