import { Injectable } from '@angular/core';
import { MemberItem } from './members-page';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  private data: MemberItem[] = [
    { id: 1, name: 'علی', lastname: 'احمدی', birthday: 1402 },
    { id: 2, name: 'امیر', lastname: 'امیدی', birthday: 1400 },
    { id: 3, name: 'نسا', lastname: 'اکبری', birthday: 1402 },
    { id: 4, name: 'سارا', lastname: 'زارعی', birthday: 1403 },
    { id: 5, name: 'مینا', lastname: 'الماسی', birthday: 1404 },
  ];
  list() {
    return [...this.data];
  }
  add(item: MemberItem) {
    this.data.push(item);
  }
  edit(item: MemberItem) {
    const index = this.data.findIndex(b => b.id == item.id);
    if (index != -1) {
      this.data[index].name = item.name;
      this.data[index].lastname = item.lastname;
      this.data[index].birthday = item.birthday;
    }
  }
  remove(item: MemberItem) {
    this.data = this.data.filter(b => b.id != item.id);
  }
}
