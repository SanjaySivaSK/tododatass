import { ReturnStatement } from '@angular/compiler';
import { Component } from '@angular/core';
import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'app-datas',
  templateUrl: './datas.component.html',
})
export class DatasComponent {
  Name: string = '';
  PhoneNumber: string = '';
  Email: string = '';
  datas: Todo[] = [];
  editid = 0;

  add():void {

    if(this.editid===0){
    const data: Todo = {
      id: this.datas.length + 1,

      Name: this.Name,
      PhoneNumber: this.PhoneNumber,
      Email: this.Email,
    };

    this.datas.push(data);
    this.Name = '';
    this.PhoneNumber = '';
    this.Email = '';
  }
  else {
    this.datas = this.datas.map((m) => {
      if (this.editid === m.id) {
        m.Name = this.Name;
        m.PhoneNumber = this.PhoneNumber;
        m.Email = this.Email;
      }
     return m
    });
    this.editid = 0; 
    this.Name = '';
    this.PhoneNumber = '';
    this.Email = '';
  }
  
}
  del(id: number): void {
    this.datas = this.datas.filter((d) => d.id !== id);
  }

  edit(id: number){

    this.editid=id;
    const foundItem = this.datas.find((f) => f.id === id);

    if (foundItem) {
      this.Name = foundItem.Name;
      this.PhoneNumber = foundItem.PhoneNumber;
      this.Email = foundItem.Email;
    }
  }
}
