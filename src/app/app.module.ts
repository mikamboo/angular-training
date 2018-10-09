import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatFormFieldModule, MatInputModule, MatToolbarModule
} from '@angular/material';

const NgMaterial = [
  MatButtonModule, MatFormFieldModule, MatInputModule, MatToolbarModule
];

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ...NgMaterial
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
