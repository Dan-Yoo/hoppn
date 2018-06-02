import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from 'src/app/model/place';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  places: Observable<any>;

  placeSearchForm: FormGroup;
  long: number = -73.56;
  lat: number = 45.5016896;
  radius: number = 500;

  constructor(private placesService: PlacesService,
    private fb: FormBuilder) {
    this.placesService.getPlaceDetail({ placeid: 'ChIJCT3qZGoayUwRmPk37VHZSRY' })
      .subscribe(place => console.log('%o', place));

    this.placeSearchForm = this.fb.group({
      long: [this.long, null],
      lat: [this.lat, null],
      radius: [this.radius, null]
    });
  }

  findPlaces() {
    let value = this.placeSearchForm.value;

    this.places = this.placesService.getPlacesNearby({
      location: JSON.stringify([value.lat, value.long]),
      radius: value.radius
    });
  }

  useCurrentLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.placeSearchForm.patchValue({
        long: position.coords.longitude,
        lat: position.coords.latitude
      })
    });
  }

  ngOnInit() {}
}
