import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularmaterialModule } from './angularmaterial/angularmaterial.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './/app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AgmCoreModule } from '@agm/core';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { SpinnerComponent } from './ui/spinner/spinner.component';
import { MAT_LABEL_GLOBAL_OPTIONS, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { MapFilterComponent } from './component/map-filter/map-filter.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavigationComponent,
    HomeComponent,
    SpinnerComponent,
    DashboardComponent,
    MapFilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularmaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AgmCoreModule.forRoot({
      apiKey: environment.google.apiKey
    }),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, 
      useValue: { 
        duration: 1500,
        horizontalPosition: 'right',
        verticalPosition: 'top'
      } 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }