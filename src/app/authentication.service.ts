import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    alert("trying to log in");
    return null;
    // return this.http.post('/login', {email, password});
  }
}
