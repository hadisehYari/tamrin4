import { Component, inject } from '@angular/core';
import { MembersService } from './members-service';

@Component({
  selector: 'app-members-page',
  imports: [],
  templateUrl: './members-page.html',
  styleUrl: './members-page.scss',
})
export class MembersPage {
  ngOnInit(): void {
    this.dataRefresh();
  }
  data: MemberItem[] = [];
  booksService = inject(MembersService);
  dataRefresh() {
    this.data = this.booksService.list();
  }
  add() {
    this.booksService.add({ id: 6, title: 'آزمایش', name: 'آزمایش', lastname: 'آزمایش', birthday: 11900 });
    this.dataRefresh();
  }
}
export interface MemberItem {
  title: string;
  name: string;
  lastname: string;
  birthday?: number;
  id: number;
}
