import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IClient } from '../models/client.interface';

@Injectable({
  providedIn: 'root'
})
export class DataDbService {
  private clientCollection: AngularFirestoreCollection<IClient>;

  constructor(private afs: AngularFirestore) {
    this.clientCollection = afs.collection<IClient>('client');
   }

   saveMessage(newClient: IClient) {
     this.clientCollection.add(newClient);
   }
}
