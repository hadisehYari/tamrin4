import { Thing } from "./base-thing";
import { BaseService } from "./base-service";

export class BaseCrudPage<T extends Thing> {
  
  save() {
    if (this.state == 'add') {
      this.dataService.add(this.item);
    } else if (this.state == 'edit') {
      this.dataService.edit(this.item);
    } else if (this.state == 'remove') {
      this.dataService.remove(this.item);
    }
    this.dataRefresh();
    this.state = 'list';
  }
  // ngOnInit(): void {
  //   this.dataRefresh();
  // }
  data: T[] = [];
  item!: T;
  dataService! : BaseService<T>;
  state: string = 'list';
  dataRefresh() {
  this.data = this.dataService.list();
  }
  add() {
    this.state = 'add';
    this.addPrepair();
  }
  addPrepair(){

  }
  edit(book: T) {
    this.item = { ...book };
    this.state = 'edit';
  }
  remove(book: T) {
    this.item = { ...book };
    this.state = 'remove';
  }
  cancel() {
    this.state = 'list';
  }
}