import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IClient } from '../models/client.interface';

@Injectable({
  providedIn: 'root'
})
export class DataDbService {

  private clientCollection: AngularFirestoreCollection<IClient>;
  listClient: Observable<any[]>;


  constructor(db: AngularFirestore) {
    this.clientCollection = db.collection<IClient>('client');
    this.listClient = db.collection('client').valueChanges();
  }

  saveClient(newClient: IClient) {
    this.clientCollection.add(newClient);
  }

  getClient() {
    return this.listClient;
  }
}
