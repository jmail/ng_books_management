export class Category {
  id: number;
  name: string;
  value: number;
  label: string;

  constructor(category) {
    if (category) {
      this.id = category.id;
      this.name = category.name;
      this.value = category.id;
      this.label = category.name;
    }
  }
}
