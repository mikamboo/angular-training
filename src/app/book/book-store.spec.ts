import { Book } from './book';
import { BookStore } from './book-store';

describe('BookStore', () => {

  it('should add books', () => {

    const bookStore = new BookStore();
    const bookListEmpty = bookStore.getBookList();

    const book1 = new Book({title: 'eXtreme Programming eXplained', price: 10});
    const book2 = new Book({title: 'Domain Driven Design', price: 15});
    const book3 = new Book({title: 'Angular Router', price: 30});
    this._bookStore.addBook(book1);
    this._bookStore.addBook(book2);
    this._bookStore.addBook(book3);
    const bookList = bookStore.getBookList();

    expect(bookListEmpty).toEqual([]);
    expect(bookList).toEqual([
      book1,
      book2,
      book3
    ]);

  });

  it('should remove books', () => {

    const bookStore = new BookStore();

    const book1 = new Book({title: 'eXtreme Programming eXplained', price: 10});
    const book2 = new Book({title: 'Domain Driven Design', price: 15});
    const book3 = new Book({title: 'Angular Router', price: 30});
    this._bookStore.addBook(book1);
    this._bookStore.addBook(book2);
    this._bookStore.addBook(book3);

    bookStore.removeBook(book1);

    const bookList = bookStore.getBookList();

    expect(bookList).toEqual([
      book2,
      book3
    ]);

  });

});
