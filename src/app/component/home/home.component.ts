import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/model/place';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PlacesService } from 'src/app/service/places.service';
import { share } from 'rxjs/operators';
import { HostListener } from '@angular/core';
import { UserPlacesService } from '../../service/user-places.service';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  long: number = -73.56;
  lat: number = 45.5016896;
  radius: number = 500;
  places: Observable<Place[]>;

  constructor(private userPlaceService: UserPlacesService,
              private placesService: PlacesService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {}

  updateLocation(location) {
    this.long = location.long;
    this.lat = location.lat;
  }

  savePlace(placeId: string): void {
    this.userPlaceService.addPlace(placeId).then(
      res => {this.snackBar.open('Added this place to My Places')},
      err => {this.snackBar.open('There was a problem trying to save this place')}
    );
  }

  getPlaces(value: any) {
    this.places = this.placesService.getPlacesNearby({
      location: JSON.stringify([value.lat, value.long]),
      radius: value.radius
    }).pipe(share());

    this.places.subscribe(
      res => { this.snackBar.open('Completed Search') },
      err => { this.snackBar.open('There was a problem while trying to search') }
    )
  }
}
