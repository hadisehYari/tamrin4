import { Injectable } from '@angular/core';
import { MemberItem } from './members-page';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  private data: MemberItem[] = [
    { id: 1, title: 'c++', name: 'علی', lastname: 'احمدی', birthday: 1380 },
    { id: 2, title: 'برنامه نویسی', name: 'امیر', lastname: 'امیدی', birthday: 1378 },
    { id: 3, title: 'پایگاه داده', name: 'نسا', lastname: 'اکبری', birthday: 1369 },
    { id: 4, title: 'طراحی وب', name: 'سارا', lastname: 'زارعی', birthday: 1356 },
    { id: 5, title: 'مدار', name: 'مینا', lastname: 'الماسی', birthday: 1350 },
  ];
  list() {
    return [...this.data];
  }
  add(item: MemberItem) {
    this.data.push(item);
  }

}
