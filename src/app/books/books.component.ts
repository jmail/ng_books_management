import { Component, OnInit } from '@angular/core';
import { Book } from '../Models/book.model';
import {BookService} from '../Services/book.service';
import { LazyLoadEvent } from 'primeng/api/public_api';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[];
  totalRecords = 0;
  loading: boolean = true;
  selectedBook: Book;
  bookSelected: Book;
  display: boolean = false;
  showCreateBook: boolean = false;
  deleteBook: boolean = false;
  editBook: boolean = false;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooksList();
  }

  getBooksList(page: number = 1, perPage: number = 10) {
    const data = {
      page,
      perPage
    };

    this.loading = true;

    return this.bookService.getBooks(data).subscribe(books => {
      this.books = books;
      this.totalRecords = this.bookService.totalBooks;
      this.loading = false;
      console.log(books);
    });
  }

  newBookAdded(){
    this.showCreateBook = false;
    this.getBooksList();
  }

  bookDeleted(){
    this.deleteBook = false;
    this.getBooksList();
  }

  bookUpdated(){
    this.editBook = false;
    this.getBooksList();
  }

  selectBook(book: Book) {
    this.bookSelected = book;
  }

  loadBooksLazy(event: LazyLoadEvent) {
    this.loading = true;
    const page = (event.first / event.rows) + 1;
    this.getBooksList(page, event.rows);
  }

}
