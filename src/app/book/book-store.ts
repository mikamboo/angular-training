import {Book} from './book';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookStore {

  private _books: Array<Book> = [];

  getBookList() {
    return this._books;
  }

  addBook(book: Book) {
    this._books = [...this._books, book]; // Principe d'Immutabilitéé
  }

  removeBook(book: Book) {
      this._books = this._books.filter(_book => _book !== book); // Principe d'Immutabilitéé
  }

  replaceBook(previousBook: Book, currentBook: Book) {
    this._books = this._books
      .map(book => {
        if (book === previousBook) {
          return currentBook;
        }
        return book;
      });
  }
}

