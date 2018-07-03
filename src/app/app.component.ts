import { Component } from '@angular/core';
import { UserPlacesService } from './service/user-places.service';

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
