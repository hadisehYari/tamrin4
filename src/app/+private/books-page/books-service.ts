import { Injectable } from '@angular/core';
import { BookItem } from './books-page';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
    private data: BookItem[] = [
      { id: 1, title: 'c++', writer: 'خورم', publisher: 'خودش', price: 567000 },
      { id: 2, title: 'برنامه نویسی', writer: 'خورم', publisher: 'خودش', price: 60000 },
      { id: 3, title: 'پایگاه داده', writer: 'خورم', publisher: 'خودش', price: 5000 },
      { id: 4, title: 'طراحی وب', writer: 'خورم', publisher: 'خودش', price: 80000 },
      { id: 5, title: 'مدار', writer: 'خورم', publisher: 'خودش', price: 38900 },
    ];
    list(){
      return [...this.data];
    }
    add(item:BookItem){
      this.data.push(item);
    }
}
