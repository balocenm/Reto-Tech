import { Component, OnInit } from '@angular/core';
import { IClient } from '../../models/client.interface';
import { DataDbService } from '../../service/data-db.service';

@Component({
  selector: 'app-client-projection',
  templateUrl: './client-projection.component.html',
  styleUrls: ['./client-projection.component.scss']
})
export class ClientProjectionComponent implements OnInit {

  listClients: IClient[];
  average: number;
  result: number;
  constructor(private dbData: DataDbService) { }

  ngOnInit() {
    this.dbData.items.subscribe(value => {
      this.listClients = value;
    });
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.calculateAverage();
    }, 3000);
  }

  calculateAverage() {
    if (this.listClients !== undefined) {
      this.average = this.listClients.map(x => x.age).reduce((a, b) => a + b) / (this.listClients.length);
    }
  }

}
