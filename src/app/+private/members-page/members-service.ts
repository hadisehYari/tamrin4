import { Injectable } from '@angular/core';
import { MemberItem } from './members-page';
import { BaseService } from '../../+shared/+base/base-service';

@Injectable({
  providedIn: 'root',
})
export class MembersService extends BaseService<MemberItem> {
  override data: MemberItem[] = [
    { id: 1, name: 'علی', lastname: 'احمدی', date: '1402' },
    { id: 2, name: 'امیر', lastname: 'امیدی', date: '1400' },
    { id: 3, name: 'نسا', lastname: 'اکبری', date: '1402' },
    { id: 4, name: 'سارا', lastname: 'زارعی', date: '1403' },
    { id: 5, name: 'مینا', lastname: 'الماسی', date: '1404' },
  ];
  override update(destination: MemberItem, source: MemberItem): void {
    destination.name = source.name;
    destination.lastname = source.lastname;
    destination.date = source.date;
  }
}
