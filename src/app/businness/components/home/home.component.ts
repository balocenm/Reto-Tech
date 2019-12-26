import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  employees = [
    { 'name': 'Fazt', position: 'manager', email: 'balocen' },
    { 'name': 'Juan', position: 'Designer', email: 'balocen' },
    { 'name': 'Pedro', position: 'Programmer', email: 'balocen' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
