import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataDbService } from '../../service/data-db.service';
import { IClient } from '../../models/client.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  listClients: IClient[];
  average: number;
  resultado: number;
  powGA: number;
  constructor(private dbData: DataDbService) { }

  ngOnInit() {
    this.dbData.items.subscribe(value => {
      this.listClients = value;
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.calcularPromedio();
      this.calcularDesviacion();
    }, 3000);
  }

  calcularPromedio() {
    this.average = this.listClients.map(x => x.age).reduce((a, b) => a + b) / this.listClients.length;
  }
  calcularDesviacion() {
    const numerador = this.listClients.map(x => x.age).reduce((a, b) => {


      return this.numberPow(a) + this.numberPow(b);
    });


    console.log(numerador);
  }

  numberPow(age: number): number {
    const ageMinusAverage = age - this.average;
    return ageMinusAverage * ageMinusAverage;
  }

}
