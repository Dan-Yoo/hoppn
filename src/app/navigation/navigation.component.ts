import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  loggedIn = false;

  constructor(private authService: AuthenticationService,
              private snackBar: MatSnackBar) {
    this.authService.user$.subscribe(user => {
      this.loggedIn = user ? true : false;
    });
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout().then(res => {
      this.snackBar.open('Logged out');
    }, err => {
      this.snackBar.open('Problem logging out');
    });
  }
}
