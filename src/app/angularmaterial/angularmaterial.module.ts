import { NgModule } from '@angular/core';
import { 
  MatButtonModule, 
  MatCheckboxModule,
  MatToolbarModule,
  MatSliderModule,
  MatGridListModule,
  MatCardModule,
  MatInputModule,
  MatProgressSpinnerModule
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
    MatProgressSpinnerModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSliderModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule
  ]
})
export class AngularmaterialModule { }
