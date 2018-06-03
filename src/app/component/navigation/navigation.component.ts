import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  loggedIn = false;

  constructor(private authService: AuthenticationService,
              private router: Router,
              private snackBar: MatSnackBar) {
    this.authService.user$.subscribe(user => {
      this.loggedIn = user ? true : false;
    });
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout().then(res => {
      this.router.navigate(['']);
      this.snackBar.open('Logged out');
    }, err => {
      this.snackBar.open('Problem logging out');
    });
  }
}
