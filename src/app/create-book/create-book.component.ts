import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {CategoryService} from '../Services/category.service';
import { SelectItem } from 'primeng/api';
import {BookService} from '../Services/book.service';
import { AlertService } from '../Services/alert.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  @Output() hideCreateBook = new EventEmitter();
  @Output() newBookAdded = new EventEmitter();
  bookForm: FormGroup;
  loading = false;
  submitted = false;
  categories: SelectItem[];
  selectedCategory: string;

  constructor(
      private categoryService: CategoryService,
      private formBuilder: FormBuilder,
      private bookService: BookService,
      private alertService: AlertService,
      private translate: TranslateService,
  ) {
    this.bookForm = this.formBuilder.group({
      name: ['', Validators.required],
      selectedCategory: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getcategoriesList();
  }

  getcategoriesList() {
    return this.categoryService.getCategories().subscribe(
        categories => {
          console.log(categories);
          this.categories = categories;
        },
    );
  }

  onSubmit(data) {
    console.log(data);
    this.submitted = true;
    if (this.bookForm.invalid) {
      this.scrollTop();
      return;
    }
    this.loading = true;
    const bookData = {
      category_id: data.selectedCategory,
      name: data.name,
    };

    const self = this;
    this.bookService.createBook(bookData).subscribe(() => {
          self.scrollTop();
          self.loading = this.submitted = false;
          this.newBookAdded.emit();
          this.alertService.success(this.translate.instant('added_book_message'));
          this.bookForm.reset();
        }, (error) => {
          self.scrollTop();
          self.loading = false;
          this.alertService.success(error, true);
        },
    );
    this.submitted = false;
    return;
  }

  scrollTop() {
    window.scrollTo(0, 0);
  }

  onCancel(){
    this.hideCreateBook.emit();
  }

}
