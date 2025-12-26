import { Injectable } from '@angular/core';
import { BookItem } from './books-page';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private data: BookItem[] = [
    { id: 1, title: 'آموزش فرانت اند', writer: 'حسن اصالت نیری', publisher: 'دیبا گران تهران', price: 322000 },
    { id: 2, title: 'پایتون ', writer: 'عباس نژادورزی', publisher: 'انتشارات فناوری نوین', price: 99900 },
    { id: 3, title: ' الگوریتم و فلوچارت', writer: 'افشین امینی', publisher: 'انتشارات سپهر حکمت', price: 39000 },
    { id: 4, title: ' سی شارپ', writer: 'یونس ابراهیمی', publisher: 'انتشارات فناوری نوین', price: 29000 },
    { id: 5, title: 'فتوشاپ', writer: 'مائده بابائی', publisher: 'انتشارات جیسا', price: 10000 },
  ];
  list() {
    return [...this.data];
  }
  add(item: BookItem) {
    this.data.push(item);
  }
  edit(item: BookItem) {
    const index = this.data.findIndex(b => b.id == item.id);
    if (index != -1) {
      this.data[index].title = item.title;
      this.data[index].writer = item.writer;
      this.data[index].publisher = item.publisher;
      this.data[index].price = item.price;
    }
  }
  remove(item: BookItem) {
    this.data = this.data.filter(b => b.id != item.id);
  }
}
