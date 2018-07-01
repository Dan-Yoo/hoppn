import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/model/place';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PlacesService } from 'src/app/service/places.service';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  places: Observable<Place>;
  placeSearchForm: FormGroup;
  long: number = -73.56;
  lat: number = 45.5016896;
  radius: number = 500;

  constructor(private placesService: PlacesService,
    private fb: FormBuilder) {
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
    }).pipe(share());
  }

  useCurrentLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.placeSearchForm.patchValue({
        long: position.coords.longitude,
        lat: position.coords.latitude
      })

      this.long = position.coords.longitude;
      this.lat = position.coords.latitude;
    });
  }

  ngOnInit() {}
}
