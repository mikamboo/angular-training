
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BookListComponent } from './book-list/book-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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

const NgMaterial = [
  MatButtonModule, MatFormFieldModule, MatInputModule, MatToolbarModule,
  MatCardModule, MatIconModule, MatSlideToggleModule
];
@NgModule({
  declarations: [
    BookListComponent,
    BookFormComponent,
    BookPreviewComponent,
    BookSearchComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
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
