import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BooksDetailModalPage } from '../books-detail-modal/books-detail-modal.page';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {
  
  books: any;

  constructor(
    private libraryService: LibraryService,
    private modalController: ModalController) { }

  ngOnInit() {
    this.libraryService.getBooks().then(books => {
      this.books = books;
    })
  }

  async showBook(book: any){
    const modal = await this.modalController.create({
      component: BooksDetailModalPage,
      componentProps: {
        book: book
      }
    });
    return await modal.present();
  }

}
