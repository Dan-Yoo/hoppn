import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private auth: AuthenticationService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: '',
      password: ''
    });
  }

  onSubmit() {
    this.auth.login(this.loginForm.value.email, this.loginForm.value.passsword);
  }

}
