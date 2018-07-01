import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PlacesService } from '../../service/places.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-map-filter',
  templateUrl: './map-filter.component.html',
  styleUrls: ['./map-filter.component.css']
})
export class MapFilterComponent implements OnInit {

  @Input() long: number;
  @Input() lat: number;
  @Input() radius: number;
  @Output() locationChange = new EventEmitter<any>();

  filters = [
    {value: 'airport', viewValue: 'Airport'},
    {value: 'aquarium', viewValue: 'Aquarium'},
    {value: 'bank', viewValue: 'Bank'},
    {value: 'cafe', viewValue: 'Cafe'},
    {value: 'bar', viewValue: 'Bar'},
    {value: 'bus_station', viewValue: 'Bus Station'},
    {value: 'embassy', viewValue: 'Embassy'}
  ];

  places: Observable<any>;
  placeSearchForm: FormGroup;

  constructor(private placesService: PlacesService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.placeSearchForm = this.fb.group({
      long: [this.long, null],
      lat: [this.lat, null],
      radius: [this.radius, null],
      filter: [''],
      isOpen: [false],
      keyword: [''],
      minPrice: [0],
      maxPrice: [0]
    });
  }

  findPlaces() {
    let value = this.placeSearchForm.value;

    this.places = this.placesService.getPlacesNearby({
      location: JSON.stringify([value.lat, value.long]),
      radius: value.radius
    });

    this.places.subscribe(places => console.log("places %o", places));
  }

  useCurrentLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.placeSearchForm.patchValue({
        long: position.coords.longitude,
        lat: position.coords.latitude
      })

      this.long = position.coords.longitude;
      this.lat = position.coords.latitude;
      this.locationChange.emit({long: this.long, lat: this.lat});
    });

  }

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

}
