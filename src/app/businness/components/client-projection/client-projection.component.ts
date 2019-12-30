import { Component, OnInit } from '@angular/core';
import { IClient, IClientDead } from '../../models/client.interface';
import { DataDbService } from '../../service/data-db.service';

@Component({
  selector: 'app-client-projection',
  templateUrl: './client-projection.component.html',
  styleUrls: ['./client-projection.component.scss']
})
export class ClientProjectionComponent implements OnInit {

  list = [
    {
      id: 'range_0_10',
      value: 3.23,
      AverageLifeHope: 80
    },
    {
      id: 'range_11_20',
      value: 0.65,
      AverageLifeHope: 80
    },
    {
      id: 'range_21_30',
      value: 1.21,
      AverageLifeHope: 80
    },
    {
      id: 'range_31_40',
      value: 1.84,
      AverageLifeHope: 80
    },
    {
      id: 'range_41_50',
      value: 4.31,
      AverageLifeHope: 80
    },
    {
      id: 'range_51_60',
      value: 9.69,
      AverageLifeHope: 80
    },
    {
      id: 'range_61_70',
      value: 18.21,
      AverageLifeHope: 80
    },
    {
      id: 'range_71_80',
      value: 27.28,
      AverageLifeHope: 80
    },
    {
      id: 'range_81_more',
      value: 33.58,
      AverageLifeHope: 80
    },
  ];

  listClients: IClient[];
  listClientDead: IClientDead[];

  average: number;
  result: number;
  range: string;
  edadMuerte: number;
  fechaProbableMuerte: string;
  constructor(private dbData: DataDbService) { }

  ngOnInit() {
    this.dbData.items.subscribe(value => {
      value.map((a, i) => {
        const ranges = this.rango(a.age);
        this.listClientDead = value;
         this.listClientDead[i].dead = this.deahtProbability(ranges, a.age, a.date);
      });
    });
  }

  rango(age: number) {
    if (age >= 0 && age <= 10) {
      return '0_10';
    } else if (age >= 11 && age <= 20) {
      return '11_20';
    } else if (age >= 21 && age <= 30) {
      return '21_30';
    } else if (age >= 31 && age <= 40) {
      return '31_40';
    } else if (age >= 41 && age <= 50) {
      return '41_50';
    } else if (age >= 51 && age <= 60) {
      return '51_60';
    } else if (age >= 61 && age <= 70) {
      return '61_70';
    } else if (age >= 71 && age <= 80) {
      return '71_80';
    } else if (age >= 81 && age <= 90) {
      return '81_90';
    } else if (age >= 91 && age <= 99) { return '91_99'; }
  }

  deahtProbability(range: string, age: number, date: string) {
    const f = this.list.find(a => {
      return a.id === ('range_' + range);
    });

    const añosPorVivir = f.AverageLifeHope - age;

    if (añosPorVivir > 0) {
      this.edadMuerte = (añosPorVivir * (100 - f.value) / 100) + age;
    }

    const vec = date.split('-');
    // tslint:disable-next-line: radix
    const fecha = new Date(parseInt(vec[0]), parseInt(vec[1]), parseInt(vec[2]));
    fecha.setFullYear(fecha.getFullYear() + this.edadMuerte);
    this.fechaProbableMuerte = fecha.getFullYear() + '-' + fecha.getMonth() + '-' + fecha.getDate();

    return this.fechaProbableMuerte;

  }

}
