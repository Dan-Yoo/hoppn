import { NgModule } from '@angular/core';
import { 
  MatButtonModule, 
  MatCheckboxModule,
  MatToolbarModule,
  MatSliderModule,
  MatGridListModule,
  MatCardModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatDividerModule,
  MatSnackBarModule,
  MatChipsModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSliderModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatSnackBarModule,
    MatChipsModule,
    MatSelectModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSliderModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatSnackBarModule,
    MatChipsModule,
    MatSelectModule
  ]
})
export class AngularmaterialModule { }
