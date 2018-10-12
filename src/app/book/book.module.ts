
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BookListComponent } from './book-list/book-list.component';
import { StorageServiceModule } from 'angular-webstorage-service';
import { BookFormComponent } from './book-form/book-form.component';
import { BookPreviewComponent } from './book-preview/book-preview.component';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSlideToggleModule,
  MatToolbarModule
} from '@angular/material';
import {BookSearchComponent} from './book-search/book-search.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import {CommonModule} from '@angular/common';

const NgMaterial = [
  MatButtonModule, MatFormFieldModule, MatInputModule, MatToolbarModule,
  MatCardModule, MatIconModule, MatSlideToggleModule
];
@NgModule({
  declarations: [
    BookListComponent,
    BookFormComponent,
    BookPreviewComponent,
    BookSearchComponent,
    BookDetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StorageServiceModule,
    ...NgMaterial,
  ],
  exports: [
    BookListComponent,
    BookFormComponent,
    BookPreviewComponent,
    BookSearchComponent
  ],
  providers: [],
})
export class BookModule { }
