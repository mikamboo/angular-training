import {Component, OnInit} from '@angular/core';
import {BookStore} from '../book-store';
import {Book} from '../book';

@Component({
  selector: 'mpo-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent  implements  OnInit {
  private _bookStore = new BookStore();

  constructor() {}

  ngOnInit(): void {
  }

  getBookList() {
    return this._bookStore.getBookList();
  }

  bookSubmitted(book: Book) {
    this._bookStore.addBook(book);
  }

  removeBook(book: Book) {
    this._bookStore.removeBook(book);
  }
}
