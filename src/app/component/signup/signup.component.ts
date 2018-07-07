import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../service/authentication.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    signupForm: FormGroup;

    constructor(private fb: FormBuilder,
        private authService: AuthenticationService,
        private router: Router,
        private snackBar: MatSnackBar) {
        this.signupForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    ngOnInit() {
    }

    onSignup(): void {
        this.authService.register(this.signupForm.value.email, this.signupForm.value.password)
            .then(res => {
                this.router.navigate(['']);
                this.snackBar.open('Successfully logged in');
            }, err => {
                this.snackBar.open('A problem occured while trying to log in (specify the problem here later)');
            });
    }
}
