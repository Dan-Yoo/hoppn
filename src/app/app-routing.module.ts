import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { AuthGuard } from './guard/auth.guard';
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
