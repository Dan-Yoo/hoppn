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
  MatTabsModule,
  MatIconModule
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
    MatTabsModule,
    MatIconModule
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
    MatTabsModule,
    MatIconModule
  ]
})
export class AngularmaterialModule { }
