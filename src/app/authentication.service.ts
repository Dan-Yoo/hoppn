import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private user = new BehaviorSubject<any>(null);
  user$ = this.user.asObservable();

  constructor(public afAuth: AngularFireAuth) { 
    this.afAuth.authState.subscribe((auth) => {
      this.user.next(auth);
    });
  }

  getUserId() {
    return firebase.auth().currentUser.uid;
  }

  register(email, password) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
          resolve(res);
        }, err => reject(err))
    });
  }

  login(email, password) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
          resolve(res);
        }, err => reject(err))
    });
  }

  logout() {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signOut()
        .then(res => {
          resolve(res);
        }, err => reject(err))
    })
  }
}
