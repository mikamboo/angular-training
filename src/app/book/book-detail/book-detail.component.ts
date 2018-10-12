import { Component, OnInit } from '@angular/core';
import {Book} from '../book';

@Component({
  selector: 'mpo-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: Book;

  constructor() { }

  ngOnInit() {
  }

}
