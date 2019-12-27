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
    if (this.listClients !== undefined) {
      this.average = this.listClients.map(x => x.age).reduce((a, b) => a + b) / this.listClients.length;
    }
  }
  calcularDesviacion() {
    if (this.listClients !== undefined) {
      const numerador = this.listClients.map(x => x.age).map((value) => {
        const resultante = value - this.average;
        const alcuadrado = resultante * resultante;
        return alcuadrado;
      }).reduce((a, b) => a + b);
      this.resultado = Math.sqrt(numerador / (this.listClients.length - 1));
    }
  }
}
