import { Component, inject, OnInit } from '@angular/core';
import { MembersService } from './members-service';
import { FormsModule } from '@angular/forms';
import { Thing } from '../../+shared/+base/base-thing';
import { BaseCrudPage } from '../../+shared/+base/base-crud-page';
import { BaseService } from '../../+shared/+base/base-service';
import { BaseCrudComponent, Column } from "../../+shared/+base/base-crud-component/base-crud-component";

@Component({
  selector: 'app-members-page',
  imports: [FormsModule, BaseCrudComponent],
  templateUrl: './members-page.html',
  styleUrl: './members-page.scss',
})
export class MembersPage extends BaseCrudPage<MemberItem> implements OnInit {
  ngOnInit(): void {
    this.item = {
      name: '',
      lastname: '',
      date: '',
    }
    this.dataRefresh();
  }
  override dataService = inject(MembersService);
  override addPrepair(): void {
    this.item = {
      name: '',
      lastname: '',
      date: '',
    }
  }
  memberColumns: Column[] = [
    { field: 'id', title: 'شماره اعضا' },
    { field: 'name', title: 'نام' },
    { field: 'lastname', title: 'نام خانوادگی' },
    { field: 'date', title: 'تاریخ عضویت' },
  ]
}
export interface MemberItem extends Thing {
  name: string;
  lastname: string;
  date?: string;
}
