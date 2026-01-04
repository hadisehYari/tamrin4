import { Injectable } from '@angular/core';
import { BookItem } from './books-page';
import { BaseService } from '../../+shared/+base/base-service';

@Injectable({
  providedIn: 'root',
})
export class BooksService extends BaseService<BookItem> {
  override data: BookItem[] = [
    { id: 1, title: 'آموزش فرانت اند', writer: 'حسن اصالت نیری', publisher: 'دیبا گران تهران', price: 322000 },
    { id: 2, title: 'پایتون ', writer: 'عباس نژادورزی', publisher: 'انتشارات فناوری نوین', price: 99900 },
    { id: 3, title: ' الگوریتم و فلوچارت', writer: 'افشین امینی', publisher: 'انتشارات سپهر حکمت', price: 39000 },
    { id: 4, title: ' سی شارپ', writer: 'یونس ابراهیمی', publisher: 'انتشارات فناوری نوین', price: 29000 },
    { id: 5, title: 'فتوشاپ', writer: 'مائده بابائی', publisher: 'انتشارات جیسا', price: 10000 },
  ];
  override update(destination: BookItem, source: BookItem): void {
    destination.title = source.title;
    destination.writer = source.writer;
    destination.publisher = source.publisher;
    destination.price = source.price;
  }
}
