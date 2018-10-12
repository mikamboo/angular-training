import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatToolbarModule} from '@angular/material';
import { StorageServiceModule } from 'angular-webstorage-service';
import { BookModule } from './book/book.module';
import { WidgetModule } from './widget/widget.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './shared/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    StorageServiceModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    WidgetModule,
    BookModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
