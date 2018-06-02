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

  places: Observable<Place[]>;

  placeSearchForm: FormGroup;
  long: number = 127.024612;
  lat: number = -37.532600;
  radius: number = 2000;

  constructor(private placesService: PlacesService,
    private fb: FormBuilder) {
    // this.placesService.getPlaceDetail({ placeid: 'ChIJCT3qZGoayUwRmPk37VHZSRY' })
    //   .subscribe(place => console.log('%o', place));

    this.placeSearchForm = this.fb.group({
      long: [this.long, null],
      lat: [this.lat, null],
      radius: [this.radius, null]
    });
  }

  findPlaces() {
    this.placeSearchForm = this.fb.group({
      long: [this.long, null],
      lat: [this.lat, null],
      radius: [this.radius, null]
    });

    // this.places = this.placesService.getPlacesNearby({
    //   location: JSON.stringify([this.long, this.lat]),
    //   radius: this.radius
    // });
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
