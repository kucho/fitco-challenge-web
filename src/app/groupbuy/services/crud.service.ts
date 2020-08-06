import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Groupbuy } from '../../models/groupbuy';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  collectionName = 'Groupbuys';
  groupbuysCollection: AngularFirestoreCollection<Groupbuy>;
  groupbuys: Observable<Groupbuy[]>;
  gbDocument: AngularFirestoreDocument<Groupbuy>;

  constructor(public fireservices: AngularFirestore) {
    this.groupbuysCollection = this.fireservices.collection<Groupbuy>(
      this.collectionName
    );
    this.groupbuys = this.groupbuysCollection.valueChanges({ idField: 'id' });
  }

  getGroupuys(): Observable<Groupbuy[]> {
    return this.groupbuys;
  }

  addGroupbuy(gb: Groupbuy) {
    this.groupbuysCollection.add(gb);
  }

  deleteGroupbuy(id: string) {
    this.gbDocument = this.fireservices.doc(`${this.collectionName}/${id}`);
    this.gbDocument.delete();
  }
}
