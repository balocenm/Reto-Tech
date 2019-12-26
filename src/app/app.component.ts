import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reto-tech';

  model: any = {};
  model2: any = {};

  msg: string = '';
  msgActive: boolean = false;
  hiddeUpdate: boolean = true;
  employees = [
    { 'name': 'Fazt', position: 'manager', email: 'balocen' },
    { 'name': 'Juan', position: 'Designer', email: 'balocen' },
    { 'name': 'Pedro', position: 'Programmer', email: 'balocen' },
  ];
  myValue;
  addEmployee() {
    this.employees.push(this.model);
    this.msg = 'campo agregado';
    this.msgActive = true;
  }

  deleteEmployee(i) {
    const answer = confirm('estas seguro de querer eliminarlo?');
    if (answer) {
      this.employees.splice(i, 1);
      this.msg = 'campo eliminado';
      this.msgActive = true;
    }
  }

  updateEmployee() {
    let i = this.myValue;
    for (let j = 0; j < this.employees.length; j++) {
      if (i === j) {
        this.employees[i] = this.model2;
        this.msg = 'campo actualizado';
        this.msgActive = true;
        this.model2 = {};
      }
    }
  }

  editEmployee(i) {
    this.hiddeUpdate = false;
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.email = this.employees[i].email;
    this.myValue = i;
  }

  closeAlert() {
    this.msg = '';
    this.msgActive = false;
  }
}
