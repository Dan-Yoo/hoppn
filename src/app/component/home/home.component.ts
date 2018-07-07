import { Component, OnInit, ViewChild } from '@angular/core';
import { Place } from 'src/app/model/place';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PlacesService } from 'src/app/service/places.service';
import { share } from 'rxjs/operators';
import { HostListener } from '@angular/core';
import { UserPlacesService } from '../../service/user-places.service';
import { MatSnackBar } from '@angular/material';
import { InfoWindow } from '@agm/core/services/google-maps-types';
import { MapFilterComponent } from '../map-filter/map-filter.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('mapFilter') mapFilter: MapFilterComponent;
  long: number = -73.56;
  lat: number = 45.5016896;
  radius: number = 500;
  places: Observable<Place[]>;
  infoWindow: InfoWindow;

  centerIconUrl = 'https://cdn1.iconfinder.com/data/icons/menu-3-3/32/gps_pin_location_map-32.png';

  constructor(private userPlaceService: UserPlacesService,
              private placesService: PlacesService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {}

  useCurrentLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.long = position.coords.longitude;
      this.lat = position.coords.latitude;
      this.mapFilter.patchLocation(this.long, this.lat);
    });
  }

  savePlace(placeId: string): void {
    this.userPlaceService.addPlace(placeId).then(
      res => {this.snackBar.open('Added this place to My Places')},
      err => {this.snackBar.open('There was a problem trying to save this place')}
    );
  }

  getPlaces() {
    let value = this.mapFilter.placeSearchForm.value;
    this.places = this.placesService.getPlacesNearby({
      location: JSON.stringify([value.lat, value.long]),
      radius: value.radius
    }).pipe(share());

    this.places.subscribe(
      res => { this.snackBar.open('Completed Search') },
      err => { this.snackBar.open('There was a problem while trying to search') }
    )
  }

  setCenterMarker(event) {
    this.lat = event.coords.lat;
    this.long = event.coords.lng;

    this.mapFilter.patchLocation(this.long, this.lat);
    this.getPlaces();
    //show loading spinner then hide on search complete.
  }

  openMarkerWindow(infoWindow, place) {
    if (this.infoWindow) this.infoWindow.close();
    this.infoWindow = infoWindow;
  }
}
