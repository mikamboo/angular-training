import {Component, OnInit} from '@angular/core';
import {BookStore} from '../book-store';
import {Book} from '../book';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {rangeValidator} from '../../../lib/range.validator';
import {Author} from '../../author/author';

@Component({
  selector: 'mpo-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent  implements  OnInit {
  private _bookStore = new BookStore();

  bookForm = new FormGroup({
    book: new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(3)
      ]),
      price: new FormControl(null, [
        Validators.required,
        rangeValidator(5, 50)
      ])
    }),
    author: new FormGroup({
      name: new FormControl(null, Validators.required)
    })
  });

  constructor() {}

  ngOnInit(): void {
  }

  removeBook(book) {
    this._bookStore.removeBook(book);
  }

  addBook() {
    const author = new Author(this.bookForm.value.author);
    const book = new Book(this.bookForm.value.book);
    this._bookStore.addBook(book);
    this.bookForm.reset();
  }

  getPictureUrl(book: Book) {
    return `https://robohash.org/${book.title.substr(0, 3)}` ;
  }

  getBookList() {
    return this._bookStore.getBookList();
  }
}
