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

  selectedBook: Book;

  constructor() {}

  ngOnInit(): void {
  }

  addBook(book: Book) {
    this._bookStore.addBook(book);
  }

  getBookList() {
    return this._bookStore.getBookList();
  }

  removeBook(book: Book) {
    this._bookStore.removeBook(book);
  }

  submitBook(book: Book) {
    this._bookStore.replaceBook(this.selectedBook, book);
    this.selectedBook = null;
  }

  selectBook(book: Book) {
    this.selectedBook = book;
  }
}
