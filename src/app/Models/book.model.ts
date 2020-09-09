export class Book {
  id: number;
  name: string;
  categoryId: number;
  categoryName: number;

  constructor(book) {
    if (book) {
      this.id = book.id;
      this.name = book.name;
      this.categoryId = book.categoryId;
      this.categoryName = book.categoryName;
    }
  }
}
