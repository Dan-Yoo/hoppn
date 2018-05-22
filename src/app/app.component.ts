import { Component } from '@angular/core';
import { PlacesService } from './places.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hoppn';

  constructor(private placesService: PlacesService) {
    // this.placesService.getPlacesNearby({
    //   location: JSON.stringify([47, -73]),
    //   radius: '5000'
    // }).subscribe(place => {
    //   console.log('%o', place);
    // });

    // this.placesService.getPlaceDetail({ placeid: 'ChIJCT3qZGoayUwRmPk37VHZSRY' })
    //   .subscribe(place => console.log('%o', place));
  }
}
