import {Component, Input} from '@angular/core';
import {Book} from '../book';

@Component({
  selector: 'mpo-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss']
})
export class BookPreviewComponent {
  @Input() book: Book;

  getPictureUrl(book: Book) {
    return `https://robohash.org/${book.title.substr(0, 6)}` ;
  }
}
