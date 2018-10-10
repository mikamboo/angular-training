import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {rangeValidator} from '../../../lib/range.validator';
import {Book} from '../book';
import {Author} from '../../author/author';

@Component({
  selector: 'mpo-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnChanges, OnInit {

  previewBook: Book;
  shouldShowPreview: boolean;

  @Input() book: Book;
  @Input() buttonLabel: string;
  @Output() bookSubmit = new EventEmitter<Book>();

  bookForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(3)
      ]),
      price: new FormControl(null, [
        Validators.required,
        rangeValidator(5, 50)
      ]),
      author: new FormGroup({
        name: new FormControl(null, Validators.required)
      })
  });

  constructor() { }

  ngOnChanges(changes: SimpleChanges){
    //-- Input bindings changed on parent component
    if(changes.book != null){
      this.bookForm.reset(changes.book);
    }
  }

  ngOnInit(){
    this.bookForm.valueChanges.subscribe(value =>{
      this.previewBook = new Book(value);
    })
  }

  submitBook() {
    const book = new Book(this.bookForm.value);
    this.bookSubmit.emit(book);
    this.bookForm.reset();
    this.previewBook = null;
  }
}
