import { Component } from '@angular/core';
import { PlacesService } from './places.service';
import { Place } from 'src/app/model/place';
import { Observable, BehaviorSubject } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hoppn';
  // move spinenr component in a better place later? (spinner should be showing whenever something loads when fetching or creating/editing)
  showSpinner = false;

  constructor() {
  }
}
