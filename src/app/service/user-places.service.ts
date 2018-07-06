import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { map, refCount, share, publishReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class UserPlacesService {

  userId: string;

  constructor(private db: AngularFirestore,
              private auth: AuthenticationService) {
    this.auth.user$.subscribe(user => {
      if (!user) return;
      this.userId = user.uid;
    });
  }

  getPlaces(): Observable<UserPlace[]> {
    let doc = this.db.doc('users/' + this.userId).collection('places');
    return doc.valueChanges() as Observable<UserPlace[]>;
  }

  addPlace(placeId: string): Promise<any> {
    console.log("trying to add place with %o", placeId);
    console.log("and user id " + this.userId);
    return this.db.collection('users').doc(this.userId).collection('places').add({
      place_id: placeId,
      is_favorite: false
    });
  }
}

export interface UserPlace {
  place_id: string;
  is_favorite: boolean;
}