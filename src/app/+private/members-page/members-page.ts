import { Component, inject } from '@angular/core';
import { MembersService } from './members-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-members-page',
  imports: [FormsModule],
  templateUrl: './members-page.html',
  styleUrl: './members-page.scss',
})
export class MembersPage {
  save() {
    if (this.state == 'add') {
      this.MembersService.add(this.item);
    } else if (this.state == 'edit') {
      this.MembersService.edit(this.item);
    } else if (this.state == 'remove') {
      this.MembersService.remove(this.item);
    }
    this.dataRefresh();
    this.state = 'list';
  }
  ngOnInit(): void {
    this.dataRefresh();
  }
  data: MemberItem[] = [];
  item: MemberItem = {
    id: 0,
    name: '',
    lastname: '',
    birthday: 0,
  }
  MembersService = inject(MembersService);
  state: string = 'list';
  dataRefresh() {
    this.data = this.MembersService.list();
  }
  add() {
    this.state = 'add';
    this.item = {
      id: 0,
      name: '',
      lastname: '',
      birthday: 0,
    }
  }
   edit(member: MemberItem) {
      this.item = { ...member };
      this.state = 'edit';
    }
    remove(member: MemberItem) {
      this.item = { ...member };
      this.state = 'remove';
    }
    cancel() {
      this.state = 'list';
    }
  }
export interface MemberItem {
  name: string;
  lastname: string;
  birthday?: number;
  id: number;
}
