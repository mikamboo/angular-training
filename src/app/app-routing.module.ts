import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {BookListComponent} from './book/book-list/book-list.component';
import {BookSearchComponent} from './book/book-search/book-search.component';

const appRoutes: Routes = [
  {
    path : 'books',
    component: BookListComponent
  },
  {
    path: 'book-search',
    component: BookSearchComponent
  },
  {
    path: '**',
    redirectTo: 'books'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
