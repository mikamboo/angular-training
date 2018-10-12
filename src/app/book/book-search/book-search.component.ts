import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {GoogleBookRepository} from '../providers/google-book-repository.service';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import { Scavenger } from '@wishtack/rx-scavenger';
import {Book} from '../book';
import { Observable } from 'rxjs';

@Component({
  selector: 'mpo-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit, OnDestroy {

  searchBookForm = new FormGroup({
    title: new FormControl(null, [
      Validators.required,
      Validators.minLength(3)
    ])
  });

  private _scavenger = new Scavenger(this);
  keywords$: Observable<string>;
  bookList$: Observable<Book[]>;
  bookSearchResults: Book[];


  constructor(private _googleBookRepository: GoogleBookRepository) {
    this.keywords$ = this.searchBookForm.valueChanges;

    this.bookList$ = this.keywords$.pipe(
      // Gère les saisie trop rapides en envoyant la requetes toutes les 200ms
      debounceTime(200),

      // Utilise la valeur seulement si elle diffère
      distinctUntilChanged(),

      // On va récupérer les book via en apellant l'api et "Merger" au stream courant en se désabonnant
      // en annulant la requete en cours (différence avec mergeMap)
      switchMap(keywords => this._googleBookRepository.searchBooks(keywords))
    );
  }

  ngOnInit() {
    this.bookList$.pipe(
      this._scavenger.collect()
    )
    .subscribe(bookList => {
      this.bookSearchResults = bookList;
    });
  }

  ngOnDestroy() {
  }
}
