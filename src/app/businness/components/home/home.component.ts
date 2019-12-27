import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataDbService } from '../../service/data-db.service';
import { IClient } from '../../models/client.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  constructor(private dbData: DataDbService) { }

  ngOnInit() {
   
  }

}
