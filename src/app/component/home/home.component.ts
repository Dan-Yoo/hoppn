import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/model/place';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PlacesService } from 'src/app/service/places.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  long: number = -73.56;
  lat: number = 45.5016896;
  radius: number = 500;

  constructor() { }

  // getPhoto(photoref: string) {
  //   this.placesService.getPlacePhoto({
  //     photoreference: photoref,
  //     maxwidth: 400
  //   });
  // }

  ngOnInit() {}

  updateLocation(location) {
    console.log("%o",location);
    this.long = location.long;
    this.lat = location.lat;
  }

}
