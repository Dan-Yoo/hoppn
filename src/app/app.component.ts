import { Component } from '@angular/core';
import { PlacesService } from './places.service';
import { Place } from 'src/app/model/place';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hoppn';
  places: Observable<Place[]>;

  constructor(private placesService: PlacesService) {
    this.places = this.placesService.getPlacesNearby({
      location: JSON.stringify([45.493129599999996, -73.6414329]),
      radius: '2000'
    });

    // this.placesService.getPlaceDetail({ placeid: 'ChIJCT3qZGoayUwRmPk37VHZSRY' })
    //   .subscribe(place => console.log('%o', place));
  }
}
