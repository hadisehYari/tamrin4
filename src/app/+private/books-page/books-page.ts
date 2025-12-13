import { Component } from '@angular/core';

@Component({
  selector: 'app-books-page',
  imports: [],
  templateUrl: './books-page.html',
  styleUrl: './books-page.scss',
})
export class BooksPage {
  data: BookItem[] = [
    { id: 1, title: 'c++', writer: 'خورم', publisher: 'خودش', price: 567000 },
    { id: 2, title: 'برنامه نویسی', writer: 'خورم', publisher: 'خودش', price: 60000 },
    { id: 3, title: 'پایگاه داده', writer: 'خورم', publisher: 'خودش', price: 5000 },
    { id: 4, title: 'طراحی وب', writer: 'خورم', publisher: 'خودش', price: 80000 },
    { id: 5, title: 'مدار', writer: 'خورم', publisher: 'خودش', price: 38900 },
  ];
  add() {
    this.data.push({id:6,title:'آزمایش',writer:'آزمایش',publisher:'آزمایش',price:11900});
  }
}
export interface BookItem {
  id: number;
  title: string;
  writer: string;
  publisher: string;
  price: number;
}