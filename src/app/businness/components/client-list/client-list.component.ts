import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IClient } from '../../models/client.interface';
import { DataDbService } from '../../service/data-db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit, AfterViewInit {

  listClients: IClient[];
  average: number;
  averageView: string;
  result: string;
  constructor(
    private dbData: DataDbService,
    private router: Router, ) { }

  ngOnInit() {
    this.dbData.items.subscribe(value => {
      this.listClients = value;
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.calculateAverage();
      this.calculateDeviationAge();
    }, 1500);
  }

  calculateAverage() {
    if (this.listClients !== undefined) {
      this.average = this.listClients.map(x => x.age).reduce((a, b) => a + b) / (this.listClients.length);
      this.averageView = (this.listClients.map(x => x.age).reduce((a, b) => a + b) / (this.listClients.length)).toFixed(2);
    }
  }

  calculateDeviationAge() {
    if (this.listClients !== undefined) {
      const numerator = this.listClients.map(x => x.age).map((value) => {
        const resulting = value - this.average;
        const squared = resulting * resulting;
        return squared;
      }).reduce((a, b) => a + b);
      this.result = Math.sqrt(numerator / (this.listClients.length - 1)).toFixed(2);
    }
  }

  back() {
    this.router.navigate(['/']);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }
}
