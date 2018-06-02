import { Component } from '@angular/core';
import { PlacesService } from './places.service';
import { Place } from 'src/app/model/place';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hoppn';
  showSpinner = false;

  constructor() {}
}
