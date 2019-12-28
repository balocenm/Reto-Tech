import { Component, OnInit } from '@angular/core';
import { IClient } from '../../models/client.interface';
import { DataDbService } from '../../service/data-db.service';

@Component({
  selector: 'app-client-projection',
  templateUrl: './client-projection.component.html',
  styleUrls: ['./client-projection.component.scss']
})
export class ClientProjectionComponent implements OnInit {

  rango = [{
    ONE: '1_10',
    ELEVEN: '11_20',
    TWENTY: '21_30',
    THIRTY: '31_40',
    FORTY: '41_50',
    FIFTY: '51_60',
    SIXTY: '61_70',
    SEVENTY: '71_80',
    EIGHTY: '81_90',
    NINETY: '91_99',
  }];


  listClients: IClient[];
  average: number;
  result: number;
  constructor(private dbData: DataDbService) { }

  ngOnInit() {
    this.dbData.items.subscribe(value => {
      value.map(a => {
        this.calcularRangoEdad(a.age);
      });
      this.listClients = value;
    });
  }


  calcularRangoEdad(age: string) {
    this.rango.map(value => {
       
    });
  }

}
