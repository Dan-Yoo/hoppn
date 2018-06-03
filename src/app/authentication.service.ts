import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userSubject = new BehaviorSubject<any>(null);
  user$ = this.userSubject.asObservable();
  user = null;

  constructor(public afAuth: AngularFireAuth) { 
    this.afAuth.authState.subscribe((auth) => {
      this.userSubject.next(auth);
      this.user = auth;
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
