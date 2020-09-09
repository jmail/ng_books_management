import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {BookService} from '../Services/book.service';
import { AlertService } from '../Services/alert.service';
import { Book } from '../Models/book.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
  @Input() bookSelected: Book;
  @Output() cancelDeleteBook = new EventEmitter();
  @Output() bookDeleted = new EventEmitter();

  constructor(
      private bookService: BookService,
      private alertService: AlertService,
      private translate: TranslateService,
  ) {
  }

  ngOnInit(): void {
  }

  onConfirmDelete() {
    if(this.bookSelected){
      return this.bookService.deleteBook(this.bookSelected.id).subscribe(response => {
        this.alertService.success(this.translate.instant('deleted_book_message'));
        this.bookDeleted.emit();
      });
    }
  }

  onCancel(){
    this.cancelDeleteBook.emit();
  }

}
