import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {CategoryService} from '../Services/category.service';
import { SelectItem } from 'primeng/api';
import {BookService} from '../Services/book.service';
import { AlertService } from '../Services/alert.service';
import { Book } from '../Models/book.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  @Input() bookSelected: Book;
  @Output() cancel = new EventEmitter();
  @Output() bookUpdated = new EventEmitter();
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
    setTimeout(() => {
      this.bookForm.get('name').setValue(this.bookSelected.name);
      this.bookForm.get('selectedCategory').setValue(this.bookSelected.categoryId);
    }, 0);
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
    this.bookService.updateBook(this.bookSelected.id, bookData).subscribe(() => {
          self.scrollTop();
          self.loading = this.submitted = false;
          this.bookUpdated.emit();
          this.alertService.success(this.translate.instant('deleted_book_message'));
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
    this.cancel.emit();
  }

}
