import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from '../../book/book-list/book-list.component';
import { BookSearchComponent } from '../../book/book-search/book-search.component';
import { BookDetailViewComponent } from './book-detail-view/book-detail-view.component';
import { BookModule } from '../../book/book.module';

export const bookRoutes: Routes = [
  {
    path: '',
    redirectTo: 'list'
  },
  {
    path: 'detail/:bookId',
    component: BookDetailViewComponent
  },
  {
    path: 'list',
    component: BookListComponent
  },
  {
    path: 'search',
    component: BookSearchComponent
  }
];

@NgModule({
  imports: [
    BookModule,
    CommonModule,
    RouterModule.forChild(bookRoutes)
  ],
  exports: [
    BookModule,
    BookDetailViewComponent
  ],
  declarations: [BookDetailViewComponent, BookDetailViewComponent]
})
export class BookViewsModule {
}
