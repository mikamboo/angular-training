import {Component, OnInit} from '@angular/core';
import {BookStore} from '../book-store';
import {Book} from '../book';

@Component({
  selector: 'mpo-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent  implements  OnInit {

  selectedBook: Book;

  constructor(
    private _bookStore: BookStore
  ) {}

  ngOnInit(): void {
    this.fetchBooksAsPromise();
  }

  private fetchBooksAsPromise(q = 'extreme%20programming'){
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${q}`)
      .then(response => response.json())
      .then(data => data.items)
      .then(items => console.log(items))
      .catch(error => {
        console.log(`D'OH!`, error);
      });
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

  selectBook(book: Book) {
    this.selectedBook = book;
  }
}
