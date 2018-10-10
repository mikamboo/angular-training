import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSlideToggleModule, MatToolbarModule
} from '@angular/material';
import { StorageServiceModule } from 'angular-webstorage-service';
import { LikeButtonComponent } from './like/like-button/like-button.component';
import { BookFormComponent } from './book/book-form/book-form.component';
import { BookPreviewComponent } from './book/book-preview/book-preview.component';

const NgMaterial = [
  MatButtonModule, MatFormFieldModule, MatInputModule, MatToolbarModule,
  MatCardModule, MatIconModule, MatSlideToggleModule
];

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    LikeButtonComponent,
    BookFormComponent,
    BookPreviewComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StorageServiceModule,
    ...NgMaterial
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
