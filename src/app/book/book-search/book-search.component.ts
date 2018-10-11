import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {GoogleBookRepository} from '../providers/google-book-repository.service';
import {debounceTime, switchMap} from 'rxjs/operators';
import {Book} from '../book';

@Component({
  selector: 'mpo-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {

  searchBookForm = new FormGroup({
    title: new FormControl(null, [
      Validators.required,
      Validators.minLength(3)
    ])
  });

  bookSearchResults: Book[];

  constructor(private _googleBookRepository: GoogleBookRepository) { }

  ngOnInit() {
    this.searchBookForm.valueChanges
      .pipe(
        debounceTime(100),
        switchMap((keywords) => {
          return this._googleBookRepository.searchBooks(keywords);
        })
      )
      .subscribe(bookList => {
        this.bookSearchResults = bookList;
      });
  }
}
